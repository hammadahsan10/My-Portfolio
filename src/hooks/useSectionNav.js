import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useSectionNav() {
  const navigate = useNavigate();

  return useCallback((id) => {
    if (id === "home") {
      navigate({ pathname: "/" }, { replace: true });
      requestAnimationFrame(() => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      navigate({ pathname: "/", hash: `#${id}` });
    }
  }, [navigate]);
}
