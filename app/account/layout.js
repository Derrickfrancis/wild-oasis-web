import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Account",
  description: "Manage your account and reservations.",
};

export default function AccountLayout({ children }) {
  return (
    <div className="flex h-full gap-3 sm:gap-12 overflow-hidden">
      <SideNavigation />
      <div className="flex-1 overflow-y-auto py-1">{children}</div>
    </div>
  );
}
