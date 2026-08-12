export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
isAnimated?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using Next.js, React, and modern CSS frameworks.",
    icon: "/images/service-img1.png",
  },
  {
    id: "2",
    title: "UI/UX & Frontend Design",
    description: "Crafting clean, accessible, and intuitive user interfaces with high focus on user experience and animation.",
    icon: "/images/service-img2.png",
  },
  {
    id: "3",
    title: "API & Backend Integration",
    description: "Connecting full-stack frontend interfaces seamlessly with REST APIs, databases, and third-party services.",
    icon: "",
    isAnimated: true,
  },
  {
    id: "4",
    title: "Performance & SEO Optimization",
    description: "Optimizing website performance, load speed, meta tags, and accessibility for better search engine rankings.",
    icon: "/images/service-img4.png",
  },
];