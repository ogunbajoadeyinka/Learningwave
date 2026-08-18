import "./globals.css";

export const metadata = {
  title: {
    default: "Learning Wave | Learning & Performance",
    template: "%s | Learning Wave",
  },
  description:
    "Learning Wave helps organizations build stronger teams through learning strategy, leadership development, performance consulting, and tailored training solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
