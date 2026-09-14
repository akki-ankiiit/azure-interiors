import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartmentspage/Navigation";
import ApartmentsPageBreadcrumbs from "../components/apartmentspage/ApartmentsPageBreadcrumbs";
import ApartmentsPageContent from "../components/apartmentspage/ApartmentsPageContent";
import SeaViews from "../components/apartmentspage/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartmentspage/MenuModal";
export default function ApartmentsPage() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <ApartmentsPageBreadcrumbs />
      <ApartmentsPageContent />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
    </main>
  );
}
