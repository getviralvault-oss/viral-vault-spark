import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Viral Vault work?",
    answer:
      "Viral Vault is a Chrome extension that adds analytics capabilities to Instagram. Once installed, when you visit any public Instagram profile, it analyzes their Reels and provides sorting options by views, likes, or comments directly on the profile page.",
  },
  {
    question: "What data can I export?",
    answer:
      "You can export views, likes, shares, comments, engagement rate, and post date in CSV format. This allows for deeper analysis in tools like Google Sheets or Excel.",
  },
  {
    question: "Is this against Instagram's terms?",
    answer:
      "Viral Vault only accesses publicly available data and doesn't require login credentials. We operate within platform guidelines while providing valuable analytics.",
  },
  {
    question: "How does the lifetime access offer work?",
    answer:
      "The first 500 users get permanent access to Viral Vault for a one-time payment of $47. This includes all future updates and features. After the first 500, we'll switch to a subscription model.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Viral Vault provides real-time data whenever you visit a profile. The engagement metrics you see are the same as what's publicly visible on Instagram at that moment. For historical data, you can export and save your reports.",
  },
  {
    question: "Is there a mobile version?",
    answer:
      "Currently, Viral Vault is available as a Chrome extension for desktop browsers. We're working on mobile solutions and plan to release mobile-compatible versions in the future. For now, we recommend using it on your computer for the best experience.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Everything you need to know about Viral Vault
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 rounded-lg px-4 md:px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:no-underline py-4 md:py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
