import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";

describe("NavigationMenu", () => {
  it("renders the logo", () => {
    const { container } = render(<NavigationMenu />);

    // Check if the logo is rendered
    const logo = container.querySelector("img");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dd959305b01393ba8c2de4642c58dd029940027147819004119192d0fd5d209f?placeholderIfAbsent=true&apiKey=63a0c855865b4fcbaaa7919b9d550136",
    );
    expect(logo).toHaveAttribute("alt", "Logo");
  });

  it("renders all navigation links", () => {
    render(<NavigationMenu />);

    // Check if all navigation links are rendered
    const newsletterLink = screen.getByText("Newsletter");
    expect(newsletterLink).toBeInTheDocument();
    expect(newsletterLink.tagName).toBe("A");
    expect(newsletterLink).toHaveAttribute("href", "#newsletter");

    const annuairesLink = screen.getByText("Annuaires");
    expect(annuairesLink).toBeInTheDocument();
    expect(annuairesLink.tagName).toBe("A");

    const servicesLink = screen.getByText("Les Services");
    expect(servicesLink).toBeInTheDocument();
    expect(servicesLink.tagName).toBe("A");
  });

  it("has the correct styling classes", () => {
    const { container } = render(<NavigationMenu />);

    // Check if the nav element has the correct classes
    const nav = container.firstChild;
    expect(nav).toHaveClass("flex", "relative", "z-10", "bg-zinc-300");

    // Check if the links have the correct classes
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveClass("font-semibold");
  });
});
