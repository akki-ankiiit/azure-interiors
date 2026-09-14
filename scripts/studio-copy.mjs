import { readFile } from 'node:fs/promises';

export const copy = {
  'Era': 'Azure', 'Residence': 'Interiors', 'Era Residence': 'Azure Interiors', 'Era Residence.': 'Azure Interiors.',
  'Estepona': 'India', 'Costa': 'Made in', 'del Sol': 'India',
  'A place': 'Your story', 'to return to': 'Our canvas', 'A place to return to.': 'Spaces with a soul.',
  'A place to live — to return year after year': 'Rooted in India — designed around you',
  'Select': 'Selected', 'an Apartment': 'Projects', 'Select an Apartment': 'Selected projects',
  'View available apartments': 'Explore our projects',
  'Three reasons to choose Era': 'The art of feeling at home',
  'Real-Life Location': 'A sense of belonging', 'Built to stay': 'Made to endure', 'Boutique concept': 'Deeply personal',
  'Nestled between pristine beaches, world-class golf courses and exclusive wellness clubs, Era Residence offers a rare balance of seclusion and seamless access to the finest Mediterranean lifestyle.': 'We begin with the way you live. Your morning rituals, the people you gather, the objects you treasure — each becomes a starting point for a home that feels unmistakably yours.',
  "Drawing on the spirit of Marbella's golden age, the design blends modern architecture with natural materials, lush landscaping and thoughtfully crafted spaces.": 'Natural stone, honest timber and beautifully resolved details. We work with a considered material palette and skilled Indian makers to create interiors that grow more beautiful with time.',
  'A boutique gated community of 25 residences on Costa del Sol, designed around privacy, wellbeing and timeless Mediterranean living.': 'A collaborative studio practice, creating thoughtful homes and intimate hospitality spaces. Considered in every detail, personal in every expression.',
  'Designed as a community, not a complex': 'Thoughtfully designed. Beautifully lived in.',
  'Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard': 'The most beautiful rooms are the ones that make you feel at ease. We bring together light, proportion and the warmth of Indian craft to make that feeling last.',
  'Architecture Team': 'Our design philosophy',
  'The concept': 'The studio',
  'ERA Residences is a boutique gated community of only 25 residences, designed around privacy, wellbeing and timeless Mediterranean living': 'Azure Interiors is an Indian interior design studio creating soulful homes and considered spaces, shaped around the people who inhabit them',
  'Inspired by the atmosphere of Marbella’s golden era, the project combines contemporary architecture with warm materials, natural landscaping and carefully curated spaces.': 'Contemporary in expression. Indian at heart. Our work brings natural materials, local craftsmanship and a quiet sense of luxury into everyday living.',
  'Spain': 'India', 'New': 'An', 'Golden': 'Indian', 'Mile': 'Soul',
  'Between Marbella and Estepona': 'Rooted here. Open to the world.',
  'Surrounded by beaches, golf courses, wellness clubs and established lifestyle destinations, the project combines privacy with effortless connectivity to everything essential for Mediterranean living. A location designed not around movement — but around returning.': 'From Raipur apartments to generous courtyard homes, we design for the many ways India lives. Local materials, thoughtful planning and a sensitivity to light, climate and culture give every project its own sense of place.',
  'The coast you wanted': 'A home that feels', 'yours': 'like you', 'this year': 'in every detail',
  'New Golden Mile, Estepona': 'Considered spaces, across India', 'Costa del Sol': 'Indian craft. Contemporary living.',
  'Ground floor + basement': 'Private villas', 'Ground Floor': 'City homes', 'Penthouse duplex': 'Hospitality',
  'Bedrooms': 'Configuration', 'Area up to': 'Typical area',
  '178 — 202 m²': '3,000 — 6,000 sq ft', '97 — 104 m²': '1,200 — 3,000 sq ft', '124 — 243 m²': '2,000 — 8,000 sq ft',
  '3': '3–5 BHK', '2': '2–4 BHK', '2-3': 'Bespoke',
  'Private basement, direct outdoor access and a dedicated lower level.': 'Generous, grounded homes that connect architecture, interiors and the landscape.',
  'Step directly onto your terrace and into the communal gardens, blending indoor comfort with outdoor living.': 'Intelligent planning and bespoke details make everyday city living feel effortless.',
  'Two floors crowned with panoramic views and a private rooftop solarium — the ultimate expression of luxury living.': 'Intimate restaurants, boutique stays and spaces with a distinct sense of place.',
  'Explore Ground + basement': 'Explore villas', 'Explore Ground floor': 'Explore city homes', 'Explore Penthouses': 'Explore hospitality',
  'Residences range from 104 to 244 sq.m., offering spacious single level and duplex layouts with generous terraces and rooftop solariums.': 'From the first sketch to the final object, we bring a considered eye to every square foot — creating spaces that feel complete, comfortable and deeply personal.',
  'Gated community': 'Space planning', 'Swimming Pool': 'Material stories', 'Parking area': 'Bespoke furniture', 'Spa & gym': 'Light & mood', 'Landscaping': 'Finishing touches',
  'Saltwater swimming pool, Children’s pool, Sauna, jacuzzi and wellness shower': 'Natural stone, tactile plaster, honest timber and handwoven textiles — materials chosen to be felt, not just seen.',
  'Each parking space includes pre-installation for optional EV charging.': 'Thoughtfully proportioned pieces, developed with skilled Indian artisans for the way you live.',
  'Designed exclusively for residents and their guests, the amenities at ERA encourage a slower and more balanced Mediterranean lifestyle': 'Layered lighting that follows your day, creating moments of warmth, focus and quiet throughout the home.',
  'The landscaping concept was designed to soften the architecture and strengthen the connection between the residences and the Mediterranean environment.': 'Art, objects, textiles and greenery. The final layer that turns a beautiful interior into a home with a point of view.',
  'Book a call': 'Let’s talk', 'Book a call now': 'Discuss your space',
  'Optional upgrades are available:': 'Thoughtfully considered:', '• Private jacuzzi': '• Bespoke furniture & joinery', '• EV charging point installation': '• Art & object curation', '• Photovoltaic panels': '• Styling & finishing touches',
  'Every detail was selected to create homes that feel elegant, intuitive and effortless to live in': 'Beautiful to look at. Effortless to live in. Every detail earns its place.',
  'Underfloor heating throughout the property. Climate automation systems. Smart lock access systems. Electrically adjustable aluminium shutters. Schneider Electric DLIFE switches and mechanisms .': 'Intuitive layouts. Integrated storage. Layered lighting. Materials that respond to our climate. Craftsmanship you can see and feel. A home designed for real life, in all its beautiful detail.',
  'Architecture': 'Our craft',
  'The architecture of ERA Residences balances clean contemporary lines with Mediterranean warmth and texture': 'We bring a contemporary eye to Indian craftsmanship, creating a quiet dialogue between tradition, texture and modern life',
  'By Schiemann Weyers': 'Designed with intention', 'Architects OCWA Architects': 'Crafted in collaboration',
  'Developer': 'Our approach', 'Swiss Technology S.L.': 'Listen first. Design thoughtfully.',
  'Sales & Marketing': 'Our collaborators', 'Unreal Estate Group': 'Independent Indian makers',
  'License obtained': 'From concept to keys',
  'The project holds all required permits and an active construction license. All documentation is publicly available. Construction is already underway — visit the site in person or follow progress via our live online stream.': 'A clear, collaborative process — from the brief and spatial planning to material selection, detailed drawings and on-site coordination. One considered vision, carried through to the finishing touches.',
  'Currently under construction. The first phase of construction is underway, with ongoing development of the apartments and communal areas. Potential buyers can anticipate a modern living space upon completion of the build.': 'Planning a new home or reimagining an existing space? Share your location, floor area in sq ft, estimated budget in ₹ and your preferred timeline. We will help you understand the next steps.',
  'A short conversation is enough to understand which apartment fits your use case — whether it is a family second home, a longer stay, or a place to return to year after year.': 'Every meaningful space begins with a conversation. Tell us about the home you imagine, the way you live, and what matters most to you.',
  'Perfect': 'A home', 'sea views': 'with soul', 'From rooftop terraces': 'Thoughtfully yours',
  'Sales Office': 'Our studio', 'sales office': 'Our studio',
  'Avenida Litoral, 29680 Estepona, Málaga, Spain': 'Raipur, Chhattisgarh, India',
  'New Golden Mile, Estepona Costa del Sol, Spain': 'Raipur · Bengaluru · Goa · Across India',
  '+34 (655) 408-648': '+91 6260906952', 'info@example.com': 'hello@azureinteriors.example',
  'Daily 09:00 – 21:00': 'Mon–Sat · 10 am–6 pm IST',
  'Made by': 'Designed with', 'Thefirstthelast': 'Indian soul',
  'Leave your details and we will get back to you within 24 hours.': 'Tell us a little about your space. We would love to hear what you have in mind.',
  'Our sales manager will review your message and respond personally. We typically reply within one business day.': 'Our studio will review your brief and get back to you personally. We look forward to learning more about your space.',
  'Name:': 'Your name:', 'Phone:': 'Phone (+91):', 'Message:': 'Your project:',
  'Crafted to Endure': 'Made to last', 'Light & Flow': 'Light & flow', 'Your Private Sanctuary': 'Your everyday sanctuary',
  'Natural stone façades were selected for their timeless appearance, durability and ease of maintenance, allowing the architecture to age beautifully over time': 'Natural finishes and honest materials, selected for their character and longevity. Beautiful today, and richer with the passing of time.',
  'Terraces, rooftop solariums and expansive openings maximize natural light while creating a seamless indoor outdoor lifestyle.': 'We let daylight lead the way, using thoughtful planning and layered lighting to give each room its own rhythm.',
  'Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard apartment building.': 'Spaces that balance togetherness with quiet corners. Designed for family, friendship and the small rituals that make a house your own.',
};

const manifest = JSON.parse(await readFile('src/data/asset-manifest.json', 'utf8'));
const originals = Object.values(manifest);
const replacements = [
  ['gated-community_day.webp', 'hero'], ['gated-community_night.webp', 'hero'],
  ['6a150aff', 'living'], ['6a150bbc', 'detail'], ['6a150cc2', 'lounge'],
  ['img_cam_05_alpha', 'courtyard'], ['6a15723f', 'villa'], ['master-plan', 'dining'],
  ['6a1514d7', 'villa'], ['6a1575f4', 'apartment'], ['6a15153b', 'hospitality'],
  ['6a1512e5', 'living'], ['6a151264', 'craft'], ['6a1573fc', 'detail'], ['6a15132f', 'bedroom'], ['6a151382', 'lounge'],
  ['6a1571e5', 'retreat'], ['6a1507fd', 'bedroom'], ['6a150807', 'suite'], ['6a150812', 'bath'], ['6a157518', 'kitchen'],
  ['6a0f8994', 'courtyard'], ['img_cta_1920', 'hero'], ['6a54e888', 'lounge'], ['6a54e86a', 'dining'],
  ['6a38473e', 'detail'], ['6a1507d9', 'studio'], ['map_sales-office', 'studio'],
];
export const assetReplacements = Object.fromEntries(originals.flatMap(path => {
  const match = replacements.find(([part]) => path.includes(part));
  if (match) return [[path, `/assets/interiors/${match[1]}.webp`]];
  if (path.includes('loc_path_labels')) return [[path, '/assets/studio/process-labels.svg']];
  if (path.includes('loc_path.svg')) return [[path, '/assets/studio/process-path.svg']];
  if (path.includes('Unreal-logo')) return [[path, '/assets/studio/makers.svg']];
  return [];
}));
