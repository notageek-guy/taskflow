import { useEffect, useRef } from "react";

interface UseOutsideClickOptions {
  callback: () => void;
}

export function useOutsideClick<T extends HTMLElement>(
  options: UseOutsideClickOptions,
  elementRef: React.RefObject<T>,
) {
  const listener = (event: MouseEvent | TouchEvent) => {
    const target = event.target as HTMLElement;
    if (!elementRef.current || elementRef.current.contains(target)) {
      return;
    }

    options.callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [listener, elementRef]);
}
