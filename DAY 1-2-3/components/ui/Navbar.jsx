export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary text-white flex items-center px-6 shadow z-50">
      {/* Left */}
      <h1 className="text-lg font-semibold tracking-wide">
        Dashboard
      </h1>

      {/* Right */}
      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm opacity-80">Admin</span>

        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </header>
  );
}
