import { Inter, Lusitana, Poppins } from "next/font/google";

// Global fonts used in the app
export const INTER = Inter({ subsets: ["latin"] });

export const POPPINS = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
export const LUSITANA = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
