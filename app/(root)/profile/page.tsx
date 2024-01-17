import { Button } from "@/components/ui/button";
import Collection from "@/components/ui/shared/Collection";
import { getEventsByUser } from "@/lib/actions/event.action";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventssPage) || 1;

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });
  return (
    <>




      <Tabs defaultValue="tickets" className="container py-10">

        <TabsList>
          <TabsTrigger value="organized">Organized Events</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        </TabsList>
        <TabsContent value="tickets">
          {/* My Tickets */}
          <section className="">
            <div className="container flex items-center justify-center sm:justify-between">
              <Button asChild size="lg" className="button hidden sm:flex ml-auto">
                <Link href="/#events">Explore More Events</Link>
              </Button>
            </div>
          </section>

          <section className=" my-8">
            <Collection
              data={orderedEvents}
              emptyTitle="No event tickets purchased yet"
              emptyStateSubtext="No worries - plenty of exciting events to explore!"
              collectionType="My_Tickets"
              limit={3}
              page={ordersPage}
              urlParamName="ordersPage"
              totalPages={orders?.totalPages}
            />
          </section>
        </TabsContent>
        <TabsContent value="organized">
          {/* Events Organized */}
          <section className="">
            <div className="flex items-center justify-center sm:justify-between">
              <Button asChild size="lg" className="button hidden sm:flex ml-auto">
                <Link href="/events/create">Create New Event</Link>
              </Button>
            </div>
          </section>

          <section className="my-8">
            <Collection
              data={organizedEvents?.data}
              emptyTitle="No events have been created yet"
              emptyStateSubtext="Go create some now"
              collectionType="Events_Organized"
              limit={6}
              page={eventsPage}
              urlParamName="eventsPage"
              totalPages={organizedEvents?.totalPages}
            />
          </section>
        </TabsContent>
      </Tabs>




    </>
  );
};

export default ProfilePage;
