import StudioLayout from '../components/layout/StudioLayout';

export default function LegalPage({ type }) {
  const privacy = type === 'privacy';
  return <StudioLayout showCta={false} breadcrumb="Azure Interiors"><section className="section studio-legal"><div className="container"><p className="l2">Azure Interiors</p><h1 className="h2">{privacy ? 'Privacy' : 'Terms of use'}</h1>
    {privacy ? <><p>When you contact the studio, the information you choose to share — your name, contact details and project brief — is used to respond to your enquiry.</p><p>Your cookie preference is stored in your browser. This website does not add advertising or analytics trackers. Fonts are delivered by Adobe Fonts.</p><p>This studio website is currently a demonstration. Enquiry delivery becomes available when the studio connects its contact service. The form clearly indicates when that service is not configured.</p></> : <><p>The portfolio currently presents illustrative design studies with editorial interior photography. These are visual concepts, not a record of completed commissions.</p><p>Project areas and descriptions are indicative. Design scope, fees in INR, timelines and deliverables are agreed separately in a written proposal.</p><p>Photography is used for editorial presentation. All images and other materials remain subject to their respective owners’ rights.</p></>}
    <a className="h5" href="/contact">Contact the studio ↗</a>
  </div></section></StudioLayout>;
}
