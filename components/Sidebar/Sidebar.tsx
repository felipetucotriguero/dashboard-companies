import { Logo } from "@/components/Logo";

import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
  return (
    <div className="h-screen">
        <div className="h-full flex flex-col border-collapse">
            <Logo />
            <SidebarRoutes />
        </div>
    </div>
  )
}
