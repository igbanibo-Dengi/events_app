import EventForm from "@/components/ui/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="container py-5 md:py-10">
        <h3 className="text-2xl font-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="container my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
