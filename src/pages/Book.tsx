import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "@tanstack/router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const BookingForm = () => {
  const form = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      time: "12:00",
      partySize: 2,
      name: "",
      specialRequests: "",
    },
    resolver: zodResolver(
      z.object({
        date: z
          .string()
          .nonempty()
          .min(1, "Required")
          .refine((v) => (v ? new RegExp(/\d\d\d\d-\d\d-\d\d/).test(v) : true), "Invalid date")
          .refine((v) => (v ? new Date(v) > new Date() : true), "Date must be in the future"),
        time: z
          .string()
          .nonempty()
          .min(1, "Required")
          .refine((v) => (v ? new RegExp(/\d\d:\d\d/).test(v) : true)),
        partySize: z.number().int().positive().min(1, "Required"),
        name: z.string().nonempty().min(1, "Required"),
        specialRequests: z.string().max(1000),
      })
    ),
    mode: "onBlur",
  });

  const router = useRouter();
  return (
    <Box
      display="grid"
      gap={3}
      component="form"
      onSubmit={form.handleSubmit((data) => {
        console.log(data);
        router.navigate({
          to: "/book/success",
        });
      })}
    >
      <TextField
        required
        label="Date"
        {...(form.formState.errors["date"] && {
          error: true,
          helperText: form.formState.errors["date"].message,
        })}
        type="date"
        {...form.register("date")}
      />
      <TextField
        required
        label="Time"
        {...(form.formState.errors["time"] && {
          error: true,
          helperText: form.formState.errors["time"].message,
        })}
        type="time"
        {...form.register("time")}
      />
      <TextField
        required
        label="Seats"
        {...(form.formState.errors["partySize"] && {
          error: true,
          helperText: form.formState.errors["partySize"].message,
        })}
        type="number"
        {...form.register("partySize", {
          valueAsNumber: true,
        })}
      />
      <TextField
        required
        label="Name"
        {...(form.formState.errors["name"] && {
          error: true,
          helperText: form.formState.errors["name"].message,
        })}
        type="text"
        {...form.register("name")}
      />
      <TextField
        label="Special requests"
        {...(form.formState.errors["specialRequests"] && {
          error: true,
          helperText: form.formState.errors["specialRequests"].message,
        })}
        type="text"
        multiline
        minRows={4}
        maxRows={8}
        {...form.register("specialRequests")}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "fit-content",
          alignSelf: "center",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

const Book = () => {
  return (
    <Box px={4} py={4} minWidth={"clamp(300px, 100%, 400px)"} justifySelf="center">
      <Typography mb={4} variant="h4">
        Book a table
      </Typography>
      <BookingForm />
    </Box>
  );
};

export default Book;
