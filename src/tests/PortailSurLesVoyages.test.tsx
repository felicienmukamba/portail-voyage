import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PortailSurLesVoyages from "./PortailSurLesVoyages";

// Mock the child components to simplify testing
vi.mock("./HeroSection", () => ({
  default: () => <div data-testid="hero-section">Hero Section</div>,
}));

vi.mock("./NavigationMenu", () => ({
  default: () => <div data-testid="navigation-menu">Navigation Menu</div>,
}));

vi.mock("./ContentSection", () => ({
  default: ({ title }: { title: string }) => (
    <div data-testid={`content-section-${title.toLowerCase()}`}>
      Content Section: {title}
    </div>
  ),
}));

vi.mock("./Footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe("PortailSurLesVoyages", () => {
  it("renders the component with all sections", () => {
    render(<PortailSurLesVoyages />);

    // Check if all main sections are rendered
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("navigation-menu")).toBeInTheDocument();
    expect(
      screen.getByTestId("content-section-découverte"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("content-section-hébergement"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("content-section-loisirs")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("has the correct structure", () => {
    const { container } = render(<PortailSurLesVoyages />);

    // Check if the main container has the correct classes
    const mainElement = container.querySelector("main");
    expect(mainElement).toHaveClass(
      "flex",
      "overflow-hidden",
      "flex-col",
      "bg-white",
    );

    // Check if the content section has the correct classes
    const contentSection = container.querySelector("section.self-center");
    expect(contentSection).toHaveClass("mt-44", "w-full", "max-w-[1348px]");
  });
});
