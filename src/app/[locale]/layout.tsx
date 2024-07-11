import type { Metadata } from "next";

import "@/styles/globals.css";
import { StoreProvider } from "@/redux/store-provider";
import Footer from "@/features/app/footer/footer";
import CustomSnackbar from "@/components/CustomSnackbar/CustomSnackbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

// TODO - Add metadata to constants
export const metadata: Metadata = {
  title: "Kanban Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html>
      <StoreProvider>
        <body>
          <CustomSnackbar />
          <main>{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}