import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6">
        {[
          { to: "/", label: "Home" },
          { to: "/taskmaster", label: "TaskMaster" },
          { to: "/connecthub", label: "ConnectHub" },
          { to: "/moneyflow", label: "MoneyFlow" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}