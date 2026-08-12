import Navbar from '@/components/sections/Navbar';
import  Hero  from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Service from '@/components/sections/Services';
import WorkFlow from '@/components/sections/Approach';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer'

export default function App(){
    return(
        <main className=''>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Service />
            <WorkFlow />
            <Testimonials />
            <Contact />
            <Footer />
            
        </main>
    );
}