import HeaderLogo from "../components/apartmentspage/HeaderLogo";
import Navigation from "../components/apartments/details/Navigation";
import Apartment113PageBreadcrumbs from "../components/apartments/details/Apartment113PageBreadcrumbs";
import Apartment113PageContent from "../components/apartments/details/Apartment113PageContent";
import Amenities from "../components/home/Amenities";
import ResidenceSummary from "../components/apartments/details/ResidenceSummary";
import RelatedResidences9 from "../components/apartments/details/RelatedResidences9";
import SeaViews from "../components/apartments/details/SeaViews";
import Footer from "../components/apartmentspage/Footer";
import CallModal from "../components/layout/CallModal";
import MenuModal from "../components/apartments/details/MenuModal";
import ImageLightbox from "../components/apartments/details/ImageLightbox";
export default function Apartment113Page() {
  return (
    <main
      data-barba="container"
      data-barba-namespace="contact"
      className="transition-container"
    >
      <HeaderLogo />
      <Navigation />
      <Apartment113PageBreadcrumbs />
      <Apartment113PageContent />
      <Amenities />
      <ResidenceSummary />
      <RelatedResidences9 />
      <SeaViews />
      <Footer />
      <CallModal />
      <MenuModal />
      <ImageLightbox />
    </main>
  );
}
