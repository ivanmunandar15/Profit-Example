import * as React from "react";

import { cn } from "@/lib/utils";

const InputWithButton = React.forwardRef(
  ({ className, type, button, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
          style={{
            paddingLeft: button ? "3rem" : "1rem", // Adjust padding based on presence of icon
          }}
        />
        {button && (
          <div className="absolute inset-y-0 left-0  flex items-center px-2 pointer-events-none text-sm text-gray-300 border-r-gray-200 border-r">
            {button}
          </div>
        )}
      </div>
    );
  }
);
InputWithButton.displayName = "Input";

export { InputWithButton };
