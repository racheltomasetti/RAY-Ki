import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";

export default function BobbingKi() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center">
      <Image
        src={
          theme === "light" ? "/assets/logo-dark.png" : "/assets/logo-light.png"
        }
        alt="Ki Logo"
        width={40}
        height={40}
        className="rounded-full animate-spin-circle"
        priority
      />
    </div>
  );
}
