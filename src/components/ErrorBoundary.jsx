import React from "react";

/**
 * ErrorBoundary catches rendering errors in child components
 * and displays fallback UI instead of a blank screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error?.message ?? "Unknown error" };
  }

  componentDidCatch(error, info) {
    // Keeps the error visible in dev tools too
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="message-container">
          <div className="error">
            Something went wrong: {this.state.errorMessage}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
