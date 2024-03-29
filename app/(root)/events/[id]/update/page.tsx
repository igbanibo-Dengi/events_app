import EventForm from "@/components/ui/shared/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  return (
    <>
      <section className="container py-5 md:py-10">
        <h3 className="text-2xl font-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="container my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
