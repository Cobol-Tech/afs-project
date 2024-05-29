import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Interactive Study Rooms",
    description:
      "Join real-time video or voice study rooms tailored to your subjects. Screen sharing and virtual whiteboards make online studying as effective as in-person.",
  },
  {
    title: "Collaborative Note-Taking and Resources",
    description:
      "Share notes, study guides, and resources seamlessly within study channels. Real-time editing and feedback turn studying into a collaborative effort.",
  },
  {
    title: "Engagement and Motivation",
    description:
      "Earn rewards, track your progress, and set study goals. With personalized challenges, staying motivated has never been easier.",
  },
  {
    title: "Inclusive Community",
    description:
      "Find your study family. Our platform promotes a safe, inclusive, and supportive studying environment for students from all backgrounds.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="scroll-m-20 border-b pb-4 text-3xl text-center font-semibold tracking-tight first:mt-0">
        Features
      </h2>

      <div className="grid md:grid-cols-2  gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card
            key={title}
            className="hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-neutral-400/10 duration-500">
            <CardHeader className="gap-6">
              <div className="size-16 ring ring-border  rounded-full"></div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
