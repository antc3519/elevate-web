import { Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function NotFound() {
  return(
    <div>    
      {/* HEADER */}
      <section className="pt-40 pb-40 text-center place-items-center">
          <Typography variant="h2" color="blue-gray" className="pt-5">
          404 - Page Not Found
          </Typography>
          <Typography variant="lead" color="blue-gray" className="opacity-70">
          The page you are looking for does not exist.
          </Typography>
          <div className="flex justify-center pt-5">
            <NavLink
            as="a"
            to="/">
              <Button size="lg" color="">Go Back to Home</Button>
            </NavLink>
        </div>
      </section>
    </div>
  );
}