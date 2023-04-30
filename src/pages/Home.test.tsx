import { render, screen } from "../test/testUtils";
import Home from "./Home";

describe("Renders the hero", () => {
  it("the hero is visible", () => {
    render(<Home />);
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });

  it("renders book a table button", () => {
    render(<Home />);
    expect(screen.getByText(/Book a table/i)).toBeInTheDocument();
  });
});
