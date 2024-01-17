import { Badge } from "@/components/ui/badge";
import CheckoutButton from "@/components/ui/shared/CheckoutButton";
import Collection from "@/components/ui/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.action";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { CalendarClock, MapPinned } from "lucide-react";
import Image from "next/image";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <section className="flex justify-center pt-10 container">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            priority
            className="h-full min-h-[300px] object-cover object-center rounded-md"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-xl">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="text-green-700 font-extrabold text-3xl"> {event.isFree ? "FREE" : `$${event.price}`}</p>

                </div>
                <Badge variant="secondary">{event.category.name}</Badge>
                <Badge className="text-white text-sm font-extralight ml-auto">
                  by {event.organizer.firstName} {event.organizer.lastName}
                </Badge>
              </div>
            </div>


            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <CalendarClock strokeWidth={1.5} />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <MapPinned strokeWidth={1.5} />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl">About this event</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
                {event.url}
              </p>

              <CheckoutButton event={event} />

            </div>
          </div>
        </div>
      </section >

      {/* EVENTS with the same category */}
      < section className="container pt-20 my-8 flex flex-col gap-8 md:gap-12" >
        <h2 className="text-3xl font-bold tracking-tighter whitespace-nowrap">Related Events</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section >
    </>
  );
};

export default EventDetails;
