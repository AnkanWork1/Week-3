export default function Sidebar() {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-sidebar text-white p-6">
      <nav className="space-y-6">
        <h2 className="text-xs uppercase tracking-wider text-gray-400">
          Menu
        </h2>

        <ul className="space-y-2">
          <li className="px-4 py-2 rounded bg-accent cursor-pointer">
            Dashboard
          </li>

          <li className="px-4 py-2 rounded hover:bg-white/10 cursor-pointer">
            Users
          </li>

          <li className="px-4 py-2 rounded hover:bg-white/10 cursor-pointer">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
