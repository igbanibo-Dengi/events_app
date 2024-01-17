import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { CalendarClock, FilePenLine, MapPinned } from "lucide-react";
import { Badge } from "@/components/ui/badge"


type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();



  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:translate-y-[-10px] md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 bottom-2 flex gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`} className="text-blue-500">
            <FilePenLine />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex justify-between gap-2">
            <p className="text-xl font-medium text-green-600">   {event.isFree ? "FREE" : `$${event.price}`}</p>
            <Badge variant="secondary"> {event.category.name}</Badge>
          </div>
        )}

        <Link href={`/events/${event._id}`}>
          <p className="font-medium text-xl">
            {event.title}
          </p>
        </Link>

        <p className="flex gap-3">
          <CalendarClock strokeWidth={1.5} />
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <p className="flex gap-3">
          <MapPinned strokeWidth={1.5} />
          {event.location}
        </p>



        <div className="flex-between w-full">
          {/* <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p> */}

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
