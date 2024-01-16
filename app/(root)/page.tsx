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
      <section className="bg-primary/20 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, \our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sint harum obcaecati odio, quaerat
            </p>
            <Button className="w-full sm:w-fit" size={"lg"} asChild>
              <Link href="#events">Expore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Lorem, ipsum dolor sit amet <br /> elit. Minus, dicta?
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Try changing your search criteria"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
}
