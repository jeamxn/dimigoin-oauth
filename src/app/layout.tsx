import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import GoogleOauthProvider from "@/provider/GoogleOauthProvider";
import RecoilProvider from "@/provider/RecoilProvider";
import ToastProvider from "@/provider/ToastProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="kr">
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafaff"/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#000000"/>
      <link rel="apple-touch-icon" href="/public/icons/apple-touch-icon.png" />
      <body>
        <RecoilProvider>
          <ToastProvider>
            <GoogleOauthProvider>
              <main>
                {children}
              </main>
            </GoogleOauthProvider>
          </ToastProvider>
        </RecoilProvider>
      </body>
    </html>
  );
};

export default RootLayout;