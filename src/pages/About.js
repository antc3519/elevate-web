import { Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function About() {
  return(
    <div>
      <section style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/media/newarkSkyline.png'})`,
        transform: `translateX(-2rem)`,
        width: `calc(100% + 4rem)`
        }} className="flex-col gap-2 mb-5 pt-56 pb-56 text-center place-items-center bg-cover">
          <Typography variant="h2" color="blue-gray" className="pt-5">
          Building New Jersey's Future, Together
          </Typography>
          <Typography variant="lead" color="blue-gray" className="opacity-80">
          Providing STEM opportunities and skills to innercity students
          </Typography>
      </section>

      {/* About Us Main Section */}
      <section className="mx-auto max-w-screen-lg p-8">
        <Typography variant="h2" color="blue-gray" className="pb-2 text-center ">
          About Us
          <Typography variant="h4" className="italic">
            Bridging Technology, Education, and Opportunity
          </Typography>
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
          At Project Elevate, we are committed to transforming lives and communities by bridging the gap 
          between technology, education, and opportunity. Focused on empowering black and brown students, 
          we develop cutting-edge AI and robotics curriculums, foster corporate partnerships, and address 
          systemic barriers to create a thriving ecosystem where underserved communities can flourish. 
          Our work ensures students are equipped with the tools, skills, and experiences they need to 
          succeed in a rapidly evolving tech-driven world.
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
          Rooted in Newark's vibrant landscape, we strive to position the city, and other urban areas 
          throughout New Jersey, as a models for urban innovation. By collaborating with local schools, 
          corporations, and government agencies, we deliver solutions that integrate education, workforce 
          development, and advanced technology. Through a community-first approach, Project Elevate not 
          only addresses systemic challenges but also creates pathways for lasting opportunity and growth 
          in Newark and beyond.
        </Typography>        
      </section>
      <hr/>

      {/* Our Mission Section */}
      <section className="mx-auto max-w-screen-lg p-8">
        <Typography variant="h2" color="blue-gray" className="pb-2 text-center ">
          Our Mission
          <Typography variant="h4" className="italic">
            The Challenge We're Tackling
          </Typography>
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
          We recognize the significant challenges that stand in the way of achieving this vision. 
          Urban schools often lack funding and the tools to leverage advanced technologies and curriculums,
          leaving students unprepared for careers in an increasingly tech-centric world. Many inner-city 
          youth face limited career opportunities, compounded by systemic barriers like skill-market 
          misalignment and minimal exposure to corporate internships. For international students, navigating 
          complex visa processes further restricts access to employment. Additionally, the lack of cohesive 
          communication between schools, corporations, and government agencies creates fragmented strategies 
          that fail to effectively address these gaps.
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
        To elevate students over this barrier, our mission is to create a comprehensive technological ecosystem that 
        bridges gaps in education, workforce development, and community engagement. Through targeted programs, 
        strategic partnerships, and project-based education solutions, we strive to accomplish the following goals:
          <div className="pt-5 px-12">
            <ul className="w-auto inline-block">
              <li>&bull; Empower & elevate students in struggling communities and homes</li>
              <li>&bull; Inspire and encourage students to pursue higher education in tech</li>
              <li>&bull; Transform urban education with innovative AI-backed curriculums</li>
              <li>&bull; Addresses workforce challenges by connecting talent and opportunities.</li>
            </ul>
          </div>
        </Typography>
      </section>
      <hr/>

      {/* Our Team Section */}
      <section className="mx-auto max-w-screen-lg p-8">
        <Typography variant="h2" color="blue-gray" className="pb-2 text-center ">
          Our Team
          <Typography variant="h4" className="italic">
            Meet our leadership
          </Typography>
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
          We are a dynamic group of individuals who are passionate about giving back to the community and strongly believe everyone should have the opportunity to learn.
        </Typography>
        <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:col-span-3">
          <li>
            <div class="flex items-center gap-x-6">
              <img class="size-32 rounded-full" src={process.env.PUBLIC_URL + '/media/headshots/fakhairSpence.png'} alt="Fakhair"/>
              <div>
                <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Fakhair Spence</h3>
                <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <img class="size-32 rounded-full" src={process.env.PUBLIC_URL + '/media/headshots/anthonyCaruso.png'} alt="Anthony"/>
              <div>
                <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Anthony Caruso</h3>
                <p class="text-sm/6 font-semibold text-indigo-600">Co-Founder / CTO</p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="mx-auto max-w-screen-lg p-8">
        <Typography variant="h2" color="blue-gray" className="pb-2 text-center ">
          Join Us
          <Typography variant="h4" className="italic">
            Help us elevate education
          </Typography>
        </Typography>
        <Typography variant="lead" className="p-2 pb-5 indent-8">
          Whether you're a student, educator, corporate partner, or community advocate, there's a place for you in Project Elevate. Together, we can bridge the gap between talent and opportunity and create a brighter future for everyone.
        </Typography>
        <div className="flex justify-center">
          <NavLink
          as="a"
          to="/Contact">
            <Button size="lg" color="">Reach out</Button>
          </NavLink>
        </div>
      </section>

    </div>
  );
}