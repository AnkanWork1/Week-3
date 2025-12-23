import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Tailwind Dashboard Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />

        <div className="flex">
          <Sidebar />

          {/* Main Content */}
          <main className="ml-64 mt-16 p-6 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
