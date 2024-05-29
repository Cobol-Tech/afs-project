import { useTheme } from "../theme-provider";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <>
      <section className="container flex flex-col justify-center items-center py-20 md:py-32 gap-10">
        <main className="max-w-screen-md text-center flex flex-col lg:gap-2">
          <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl text-balance">
            Unlock Collective Success - Study Together, Grow Together
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 lg:text-lg text-balance">
            Dive into a world where studying is a shared journey. Join live
            study sessions, share notes, and conquer academic challenges with
            peers from around the globe. Welcome to Hive, where your next study
            group is just a click away.
          </p>
        </main>

        <div className="w-full flex flex-col gap-2 sm:flex-row items-center justify-center">
          <Link
            to="/signup"
            className={`${buttonVariants({ variant: "default", size: "lg" })}`}>
            Get Started
          </Link>
          <Link
            to="/login"
            className={`${buttonVariants({ variant: "outline", size: "lg" })}`}>
            Login
          </Link>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <img
            src={theme === "light" ? "Hive-light-ss.png" : "Hive-ss.png"}
            alt="Hive screenshot"
            className={
              theme === "light"
                ? "w-full rounded-lg md:rounded-3xl shadow-2xl"
                : "w-full rounded-lg md:rounded-3xl shadow-2xl shadow-neutral-800"
            }
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
