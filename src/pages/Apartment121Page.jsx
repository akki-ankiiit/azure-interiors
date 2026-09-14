import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartments/details/Navigation";
import Apartment121PageBreadcrumbs from "../components/apartments/details/Apartment121PageBreadcrumbs";
import Apartment121PageContent from "../components/apartments/details/Apartment121PageContent";
import Amenities from "../components/home/Amenities";
import ResidenceSummary from "../components/apartments/details/ResidenceSummary";
import RelatedResidences11 from "../components/apartments/details/RelatedResidences11";
import SeaViews from "../components/apartments/details/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartments/details/MenuModal";
import ImageLightbox from "../components/apartments/details/ImageLightbox";
export default function Apartment121Page() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <Apartment121PageBreadcrumbs />
      <Apartment121PageContent />
      <Amenities />
      <ResidenceSummary />
      <RelatedResidences11 />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
      <ImageLightbox />
    </main>
  );
}
