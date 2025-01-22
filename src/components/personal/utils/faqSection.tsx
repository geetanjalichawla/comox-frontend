import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit semper delar dore some elementum tempus hac tellus
          dolor sit amet consectur.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4 group">
        <AccordionItem value="item-1" className="border rounded-lg px-4 group-hover:backdrop-blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105">
          <AccordionTrigger className="text-left [&[data-state=open]>svg]:rotate-90" >
            Do you offer international shipping?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-4 group-hover:backdrop-blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105">
          <AccordionTrigger className="text-left [&[data-state=open]>svg]:rotate-90">
            What does the 30-day warranty cover?
          </AccordionTrigger>
          <AccordionContent>
            Our 30-day warranty covers manufacturing defects and malfunctions. It includes free repairs or replacements
            for eligible products.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-4 group-hover:backdrop-blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105">
          <AccordionTrigger className="text-left [&[data-state=open]>svg]:rotate-90">
            Do you have an in-person showroom to see the products?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we have showrooms in select locations where you can view and test our products in person.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-4 group-hover:backdrop-blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105">
          <AccordionTrigger className="text-left [&[data-state=open]>svg]:rotate-90">
            Do you offer payments on installments?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer flexible payment plans through various financing partners. Terms and conditions apply.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-4 group-hover:backdrop-blur-sm hover:!blur-none hover:relative hover:z-10 transition-all duration-500 hover:scale-105">
          <AccordionTrigger className="text-left [&[data-state=open]>svg]:rotate-90">
            What&apos;s your support line to call for support?
          </AccordionTrigger>
          <AccordionContent>
            Our support team is available at 1-800-123-4567, Monday through Friday, 9 AM to 6 PM EST.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

