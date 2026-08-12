export interface Skill {
  id: string;
  title: string;
  percentage: number;
  image: string;
  category: 'design' | 'development' | 'tools' | 'deployment';
}

export const SKILLS_DATA: Skill[] = [
  // Design
  { id: '1', title: 'Figma', percentage: 90, image: '/images/figma.png', category: 'design' },
  { id: '2', title: 'Photoshop', percentage: 85, image: '/svgs/photoshop.svg', category: 'design' },
  { id: '3', title: 'Canva', percentage: 90, image: '/svgs/canva.svg', category: 'design' },
  { id: '4', title: 'Adobe', percentage: 75, image: '/svgs/adobe.svg', category: 'design' },
  
  // Development
  { id: '5', title: 'HTML', percentage: 95, image: '/svgs/html.svg', category: 'development' }, 
  { id: '6', title: 'javascript', percentage: 90, image: '/svgs/javascript.svg', category: 'development' },
   { id: '7', title: 'Jquery', percentage: 95, image: '/svgs/jquery.svg', category: 'development' },
  { id: '8', title: 'React', percentage: 85, image: '/svgs/reactjs.svg', category: 'development' },
  { id: '9', title: 'Next.js', percentage: 85, image: '/svgs/nextjs.svg', category: 'development' },
  { id: '10', title: 'Tailwind CSS', percentage: 90, image: '/svgs/tailwind.svg', category: 'development' },
  { id: '11', title: 'TypeScript', percentage: 85, image: '/svgs/typescript.svg', category: 'development' },
  { id: '12', title: 'Threejs', percentage: 80, image: '/svgs/threejs.svg', category: 'development' },
  { id: '13', title: 'Nodejs', percentage: 80, image: '/svgs/nodejs.svg', category: 'development' },
  { id: '14', title: 'APIS', percentage: 90, image: '/svgs/api-icon.svg', category: 'development' },
  { id: '15', title: 'Sql DB', percentage: 85, image: '/svgs/sql.svg', category: 'development' },
{ id: '16', title: 'MongoBD', percentage: 80, image: '/svgs/mongodb.svg', category: 'development' },


  // Tools
  { id: '17', title: 'Git & GitHub', percentage: 85, image: '/svgs/github.svg', category: 'tools' },
  { id: '18', title: 'VS Code', percentage: 90, image: '/svgs/vs-code.svg', category: 'tools' },
{ id: '19', title: 'PostMan', percentage: 90, image: '/svgs/postman.svg', category: 'tools' },
{ id: '20', title: 'Trello', percentage: 90, image: '/svgs/trello.svg', category: 'tools' },


  // Deployment
  { id: '21', title: 'Vercel', percentage: 85, image: '/svgs/vercel.svg', category: 'deployment' },
  { id: '22', title: 'GitHub Pages', percentage: 85, image: '/svgs/github-pages.svg', category: 'deployment' },
  { id: '23', title: 'Netlify', percentage: 80, image: '/svgs/netlify.svg', category: 'deployment' },
  { id: '24', title: 'AWS', percentage: 85, image: '/svgs/aws.svg', category: 'deployment' },
];