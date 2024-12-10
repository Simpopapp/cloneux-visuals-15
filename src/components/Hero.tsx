import { Button } from "./ui/button";
import { BookingDialog } from "./BookingDialog";

export const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center min-h-[80vh] flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        {/* Background mustache with improved positioning */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <img 
            src="/lovable-uploads/0130b243-17e9-419f-a296-fde90b9a85b3.png" 
            alt="Mustache Background"
            className="w-[500px] h-auto opacity-30 animate-fade-in"
          />
        </div>

        {/* Content with improved spacing and typography */}
        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4 text-gold animate-fade-in tracking-tight">
          Sr. Oliveira
        </h1>
        <p className="text-2xl md:text-3xl mb-3 text-white font-light tracking-wider uppercase">
          Barbearia
        </p>
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
          Premium grooming for the modern gentleman
        </p>
        
        <BookingDialog defaultService="">
          <Button className="bg-gold hover:bg-gold-light text-black font-bold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02] uppercase tracking-wider">
            Agendar Horário
          </Button>
        </BookingDialog>
      </div>
    </div>
  );
};