import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - The Store",
    default: "Welcome - The Store",
  },
  description:
    "Discover the latest and most innovative gadgets at The Online store! From smart tech and accessories to everyday essentials, we offer cutting-edge products that make life easier, more fun, and more connected. Shop now and elevate your tech game!",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <div className="antialised bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
          <Header />
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
