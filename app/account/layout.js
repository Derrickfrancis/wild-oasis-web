import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Account",
  description: "Manage your account and reservations.",
};

export default function AccountLayout({ children }) {
  return (
    <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[16rem_1fr] gap-3 sm:gap-12 h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
