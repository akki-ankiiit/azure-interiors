import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartments/details/Navigation";
import Apartment032PageBreadcrumbs from "../components/apartments/details/Apartment032PageBreadcrumbs";
import Apartment032PageContent from "../components/apartments/details/Apartment032PageContent";
import Amenities from "../components/home/Amenities";
import ResidenceSummary from "../components/apartments/details/ResidenceSummary";
import RelatedResidences4 from "../components/apartments/details/RelatedResidences4";
import SeaViews from "../components/apartments/details/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartments/details/MenuModal";
import ImageLightbox from "../components/apartments/details/ImageLightbox";
export default function Apartment032Page() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <Apartment032PageBreadcrumbs />
      <Apartment032PageContent />
      <Amenities />
      <ResidenceSummary />
      <RelatedResidences4 />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
      <ImageLightbox />
    </main>
  );
}
