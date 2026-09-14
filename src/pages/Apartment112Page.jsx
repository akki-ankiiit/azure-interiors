import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartments/details/Navigation";
import Apartment112PageBreadcrumbs from "../components/apartments/details/Apartment112PageBreadcrumbs";
import Apartment112PageContent from "../components/apartments/details/Apartment112PageContent";
import Amenities from "../components/home/Amenities";
import ResidenceSummary from "../components/apartments/details/ResidenceSummary";
import RelatedResidences8 from "../components/apartments/details/RelatedResidences8";
import SeaViews from "../components/apartments/details/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartments/details/MenuModal";
import ImageLightbox from "../components/apartments/details/ImageLightbox";
export default function Apartment112Page() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <Apartment112PageBreadcrumbs />
      <Apartment112PageContent />
      <Amenities />
      <ResidenceSummary />
      <RelatedResidences8 />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
      <ImageLightbox />
    </main>
  );
}
