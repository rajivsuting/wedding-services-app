"use client";

export const trackPerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    // Track First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log("FCP:", entry.startTime);
        // You can send this to your analytics service
      });
    });
    fcpObserver.observe({ entryTypes: ["paint"] });

    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log("LCP:", entry.startTime);
        // You can send this to your analytics service
      });
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log("FID:", entry.processingStart - entry.startTime);
        // You can send this to your analytics service
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Track Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log("CLS:", entry.value);
        // You can send this to your analytics service
      });
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });
  }
};

export const trackPageLoad = () => {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      const timing = window.performance.timing;
      const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      console.log("Page Load Time:", pageLoadTime);
      // You can send this to your analytics service
    });
  }
};

export const trackResourceTiming = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.initiatorType === "img" || entry.initiatorType === "script") {
          console.log(`${entry.initiatorType} Load Time:`, entry.duration);
          // You can send this to your analytics service
        }
      });
    });
    observer.observe({ entryTypes: ["resource"] });
  }
};
