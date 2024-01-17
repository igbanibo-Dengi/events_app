import Display from "@/components/display";
import { Button } from "@/components/ui/button";
import CategoryFilter from "@/components/ui/shared/CategoryFilter";
import Collection from "@/components/ui/shared/Collection";
import Search from "@/components/ui/shared/Search";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  // console.log(events);

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center md:h-[650px] "
      >
        <Image
          src='/hero_image.jpg'
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero"
          className="h-[500px] z-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
          <h1 className="text-4xl font-bold  md:text-5xl lg:text-6xl text-primary">Find Your Next Event with Ticketlee</h1>
          <p className="mt-4 text-xl text-white md:text-2xl lg:text-3xl mb-4">Where Every Event Begins</p>
          <Button size={"lg"} className="px-8 text-lg font-medium h-12" asChild>
            <Link href="#events">Find Tickets</Link>
          </Button>

        </div>
      </section>
      <section className=" bg-primary/5">
        <Display />
      </section>
      <section
        id="events"
        className="container pt-5 my-8 flex flex-col gap-10 md:gap-16"
      >
        <div className="flex justify-between w-full flex-col gap-5 md:gap-36 sm:flex-row basis-1/2">
          <span>
            <h2 className="text-3xl font-bold tracking-tighter whitespace-nowrap">Upcoming Events</h2>
          </span>
          <span className="flex  flex-col sm:flex-row gap-3 w-full">

            <Search />
            <CategoryFilter />
          </span>
        </div>
        <div className="basis-1/2">

          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Try changing your search criteria"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </div>
      </section>
    </>
  );
}
