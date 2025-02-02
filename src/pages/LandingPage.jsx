import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();
  const handleshorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createnew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 mx-2 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only url shortener <br /> you&rsquo;ll ever need
      </h2>
      <form
        onSubmit={handleshorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your long url"
          onSubmit={handleshorten}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full mx-4 flex-1 py-4 px-4"
        />
        <Button className="h-full mx-4" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>
      <img src="/cards.jpg" alt="banner" className="w-full my-11 md:px-11" />
      <Accordion type="multiple" collapsible="true" className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does this url shortener works?
          </AccordionTrigger>
          <AccordionContent>Easily</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How does this url shortener works?
          </AccordionTrigger>
          <AccordionContent>Easily</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How does this url shortener works?
          </AccordionTrigger>
          <AccordionContent>Easily</AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </div>
  );
};

export default LandingPage;
