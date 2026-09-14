import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartments/details/Navigation";
import Apartment131PageBreadcrumbs from "../components/apartments/details/Apartment131PageBreadcrumbs";
import Apartment131PageContent from "../components/apartments/details/Apartment131PageContent";
import Amenities from "../components/home/Amenities";
import ResidenceSummary from "../components/apartments/details/ResidenceSummary";
import RelatedResidences14 from "../components/apartments/details/RelatedResidences14";
import SeaViews from "../components/apartments/details/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartments/details/MenuModal";
import ImageLightbox from "../components/apartments/details/ImageLightbox";
export default function Apartment131Page() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <Apartment131PageBreadcrumbs />
      <Apartment131PageContent />
      <Amenities />
      <ResidenceSummary />
      <RelatedResidences14 />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
      <ImageLightbox />
    </main>
  );
}
