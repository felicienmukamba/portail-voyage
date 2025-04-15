import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the quote and author correctly", () => {
    render(<HeroSection />);

    // Check if the quote is rendered
    const quote = screen.getByText(
      /Une fois par an, visitez un lieu où vous n'êtes jamais allé auparavant./i,
    );
    expect(quote).toBeInTheDocument();
    expect(quote.tagName).toBe("H1");

    // Check if the author is rendered
    const author = screen.getByText(/Dalai Lama/i);
    expect(author).toBeInTheDocument();
  });

  it("renders the image", () => {
    const { container } = render(<HeroSection />);

    // Check if the image is rendered
    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a9633d566038f2a5e3360ca7460ab3fd5effac4cf14809a9c3e749d42dcef63e?placeholderIfAbsent=true&apiKey=63a0c855865b4fcbaaa7919b9d550136",
    );
    expect(image).toHaveAttribute("alt", "Travel illustration");
  });

  it("has responsive classes", () => {
    const { container } = render(<HeroSection />);

    // Check if the component has responsive classes
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("max-md:text-4xl");

    const section = container.firstChild;
    expect(section).toHaveClass("max-md:max-w-full");
  });
});
