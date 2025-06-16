"use client";

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can log the error to an error reporting service here
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#ee4c59] mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page
              or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#ee4c59] text-white px-6 py-2 rounded-lg hover:bg-[#d63d4a] transition-colors"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === "development" && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
                <p className="text-red-600 font-mono text-sm">
                  {this.state.error && this.state.error.toString()}
                </p>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
