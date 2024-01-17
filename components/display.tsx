import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { CircleDollarSign, DraftingCompass, Megaphone } from 'lucide-react'


const Display = () => {
    return (
        <div className='py-10 container'>
            <span className="text-center mb-5">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter whitespace-nowrap">Create and sell your ticket online</h2>
                <p>Promote, Sell and Manage any event, in any venue</p>
            </span>

            <div>
                <Tabs defaultValue="create" className='mx-auto max-w-[900px] min-h-[400px]'>
                    <TabsList className='mx-auto flex w-fit bg-transparent mb-10'>
                        <TabsTrigger value="create" className='text-center'>
                            <span className='flex flex-col items-center'>
                                <DraftingCompass size={40} />
                                <p> Create</p>
                            </span>
                        </TabsTrigger>
                        <TabsTrigger value="promote">
                            <span className='flex flex-col items-center'>
                                <Megaphone size={40} />
                                <p> Promote</p>
                            </span>
                        </TabsTrigger>
                        <TabsTrigger value="sell">
                            <span className='flex flex-col items-center'>
                                <CircleDollarSign size={40} />
                                <p> Sell</p>
                            </span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="create" >
                        <div className='flex gap-5 flex-col items-center md:flex-row'>
                            <Image
                                src='/assets/create.svg'
                                width={300}
                                height={300}
                                alt='create'
                                className='basis-1/2'
                            />
                            <div className='basis-1/2'>
                                <h3 className='mb-4 font-semibold'>Create and customize yor events</h3>
                                <p className='text-muted-foreground'>Create and manage event listings with ease on our platform, enabling you to set up an online ticketing system for any event at any venue within minutes. Our intuitive and free ticketing service provides you with comprehensive control over every aspect of your event listings. Plus, you can sell tickets effortlessly, empowering users to host and monetize their events seamlessly.</p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="promote">
                        <div className='flex gap-5 flex-col  items-center md:flex-row'>
                            <Image
                                src='/assets/share.svg'
                                width={200}
                                height={200}
                                alt='create'
                                className='basis-1/2'

                            />

                            <div className='basis-1/2'>
                                <h3 className='mb-4 font-semibold'>Publish and promote your event</h3>
                                <p className='text-muted-foreground'>Elevate your event promotion game with Ticketlee, where we provide you a suite of powerful marketing tools to amplify your event's reach. Leverage our automated social media sharing feature, craft enticing early bird pricing options. At Ticketlee, we're not just selling tickets; we're empowering event organizers to create a magnetic pull that draws attendees to their extraordinary experiences.</p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="sell">
                        <div className='flex gap-5 flex-col items-center md:flex-row'>
                            <Image
                                src='/assets/sell.svg'
                                width={300}
                                height={300}
                                alt='create'
                                className='basis-1/2'

                            />
                            <div className='basis-1/2'>
                                <h3 className='mb-4 font-semibold'>Start selling tickets online</h3>
                                <p className='text-muted-foreground'>Take control of your event ticketing experience with our complimentary platform, allowing you to effortlessly sell tickets online and record in-person payments. With a variety of ticket formats at your disposal, our system seamlessly combines online and in-house ticketing into a single inventory, eliminating the risk of overbooking. Enjoy the flexibility and peace of mind as you manage your ticket sales with ease.</p>
                            </div>
                        </div>
                    </TabsContent>

                </Tabs>

            </div>
        </div>
    )
}

export default Display