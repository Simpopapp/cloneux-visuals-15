import { Button } from "./ui/button";
import { BookingDialog } from "./BookingDialog";

export const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center min-h-[600px] flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/80"></div>
      
      {/* Content wrapper with mustache background */}
      <div className="relative max-w-3xl px-4 z-10">
        {/* Large background mustache positioned behind content */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <img 
            src="/lovable-uploads/0130b243-17e9-419f-a296-fde90b9a85b3.png" 
            alt="Mustache Background"
            className="w-[500px] h-auto opacity-30 animate-fade-in"
          />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2 text-gold animate-fade-in">Sr. Oliveira</h1>
        <p className="text-2xl mb-1 text-white font-light tracking-wider">BARBEARIA</p>
        <p className="text-xl mb-8 text-gray-300">Premium grooming for the modern gentleman</p>
        <BookingDialog defaultService="">
          <Button className="bg-gold hover:bg-gold-light text-black font-bold px-8 py-3 rounded-md shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02]">
            AGENDAR HORÁRIO
          </Button>
        </BookingDialog>
      </div>
    </div>
  );
};