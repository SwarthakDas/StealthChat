"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import messages from "@/messages.json"

const Home = () => {
  return (
    <>
    <main className='flex-grow flex flex-col items-center justify-center px-4 md:px-24 pt-20 pb-48 bg-slate-50'>
      <section className='text-center mb-8 md:mb-12'>
        <h1 className='font-bold text-3xl md:text-4xl'>Chat in the shadows, stay unseen</h1>
        <p className='mt-3 md:mt-4 text-lg'>Stealthy connections, secure and untraceable</p>
      </section>
      <Carousel 
      plugins={[Autoplay({delay: 2000})]}
      className="w-full max-w-xs bg-slate-50">
      <CarouselContent>
        {
          messages.map((message,index)=>(
            <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>
                  {message.title}
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-lg font-semibold">{message.content}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </main>
    <footer className="text-center p-4 md:p-6 font-semibold">
    © 2024 StealthChat. All rights reserved.
    </footer>
    </>
  )
}

export default Home
