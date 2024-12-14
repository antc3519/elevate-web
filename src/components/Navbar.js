import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  InformationCircleIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UsersIcon,
  PhoneIcon,
  BookOpenIcon
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

// profile menu component
const profileMenuItems= [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <Button size="sm" variant="text" className="lg:ml-auto mr-2">
        <span>Student Log In</span>
      </Button>
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
// nav list menu
const navListMenuItems = [
  {
    title: "TEMP HERE",
    description:
      "Lorem Ipsom",
  },
  {
    title: "TEMP HERE",
    description:
      "Lorem Ipsom",
  },
  {
    title: "TEMP HERE",
    description:
      "Lorem Ipsom",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <NavLink to={"/" + title} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        {
        
        // UNCOMMENT WHEN PROGRAMS ARE IMPLEMENTED

        /* <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <AcademicCapIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Programs{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler> */}
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      {/* 
      
        TO BE IMPLEMENTED IN FUTURE

      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <AcademicCapIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Programs{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul> */}
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "About",
    icon: InformationCircleIcon,
  },
  // {
  //   label: "Resources",
  //   icon: BookOpenIcon,
  // },
  {
    label: "Contact",
    icon: PhoneIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <NavLink
          key={label}
          as="a"
          to={"/" + label}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </NavLink>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <div className="absolute w-full flex p-8 justify-center z-50">
      <Navbar className="max-w-screen-xl p-2 lg:rounded-full lg:pl-6 pl-100 mx-20">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <NavLink
            as="a"
            to="/"
            className="mr-4 ml-2 cursor-pointer font-medium"
          >
            <div className="absolute">
              <Logo scale="38px" type="no-text"/>
            </div>
            <Typography className="py-1.5 ml-12">
              Project Elevate
            </Typography>
          </NavLink>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
  
          {/* 
          
          TO BE IMPLEMENTED IN FUTURE
          
          <ProfileMenu /> */}
        </div>
        <MobileNav open={isNavOpen}>
          <NavList />
        </MobileNav>
      </Navbar>
    </div>
  );
}