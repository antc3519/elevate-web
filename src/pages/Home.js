import { Logo } from "../components/Logo";
import { Button, Typography, Card } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function Home() {
  return(
    <div>
      
      {/* HEADER */}
      <section className="pt-32 pb-40 text-center place-items-center">
          <Logo scale="350px"/>
          <Typography variant="h2" color="blue-gray" className="pt-5">
          Technology Programs for Secondary Education
          </Typography>
          <Typography variant="lead" color="blue-gray" className="opacity-70">
          Where Innovation Meets Community & Global Opportunity
          </Typography>
      </section>

      {/* ABOUT */}
      <section>
        <hr className="pb-10"/>
        <Typography variant="lead" className="pb-5 mx-auto max-w-screen-lg text-center">
          At Project Elevate, we are committed to transforming lives and communities by bridging the gap 
          between technology, education, and opportunity. Focused on empowering black and brown students, 
          we develop cutting-edge AI and robotics curriculums, foster corporate partnerships, and address 
          systemic barriers to create a thriving ecosystem where underserved communities can flourish. 
          Our work ensures students are equipped with the tools, skills, and experiences they need to 
          succeed in a rapidly evolving tech-driven world.
        </Typography>
        <div className="flex justify-center pb-20">
          <NavLink
          as="a"
          to="/About">
            <Button size="lg" color="">Read More</Button>
          </NavLink>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <Typography variant="h3" color="blue-gray" className="pb-2 text-center ">
          Our Services
        </Typography>
        <hr className="pb-10"/>
        <div className="grid grid-cols-1 gap-4 self-end md:grid-cols-1 lg:grid-cols-2 pb-20 max-w-screen-2xl justify-self-center">
          <NavLink
            to="/Programs/TEMP"
            target="_blank"
          >
            <Card
              shadow={false}
              className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                AI/ML Certification Courses
              </Typography>
              <Typography color="blue-gray" className="font-normal opacity-70">
                Hands-on certified training courses taught by local college students<br></br><br></br>
              </Typography>
            </Card>
          </NavLink>
          <NavLink
            to="/Programs/TEMP"
            target="_blank"
          >
            <Card
              shadow={false}
              className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>

                Community Integration
              </Typography>
              <Typography color="blue-gray" className="font-normal opacity-70">
                Regular networking events, cultural celebrations, and professional development workshops.
              </Typography>
            </Card>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/jobs/view/4088502132"
            target="_blank"
          >
            <Card
              shadow={false}
              className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Teaching Opportunities
              </Typography>
              <Typography color="blue-gray" className="font-normal opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                Summer 2025 Full-Time ($22/hour)<br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                Academic Year Part-Time ($20/hour)<br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                Internship Credit Options
              </Typography>
            </Card>
          </NavLink>
          <NavLink
            to="/Programs/TEMP"
            target="_blank"
          >
            <Card
              shadow={false}
              className="border border-blue-gray-50 py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5"
            >
              <Typography variant="h5" color="blue-gray" className="mb-3 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                International Student Initiative
              </Typography>
              <Typography color="blue-gray" className="font-normal opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                F-1 Visa Support<br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                Tech Job Placement<br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 float-left pr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                Cultural Integration Support
              </Typography>
            </Card>
          </NavLink>
          
        </div>
      </section>

      {/* PARTNERS */}
      <section>
        <Typography variant="h3" color="blue-gray" className="pb-2 text-center ">
          Our Partners
        </Typography>
        <hr className="pb-10"/>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-screen-2xl justify-self-center">
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/newarkLogo.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/investNewark.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/newarkAlliance.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/njiiLogo.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/njitLogo.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/westsideLogo.png'}
              alt="gallery-photo" />
            <img class="object-cover object-center w-full max-w-md rounded-lg"
              src={process.env.PUBLIC_URL + '/media/partnerLogos/marcoLogo.png'}
              alt="gallery-photo" />
        </div>
      </section>
      
    </div>
  );
}