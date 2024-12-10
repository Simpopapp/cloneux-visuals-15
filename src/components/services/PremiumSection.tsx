import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PremiumContent } from "./premium/PremiumContent";
import { PremiumModal } from "./premium/PremiumModal";
import { type PlanType } from "./premium/types";

interface PremiumSectionProps {
  plans: PlanType[];
}

export const PremiumSection = ({ plans }: PremiumSectionProps) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 py-4 text-gold hover:text-gold-light transition-colors group"
      >
        <span className="text-lg font-serif">Descubra o Plano Premium</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          } group-hover:scale-110`}
        />
      </button>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <PremiumContent 
          plans={plans}
          onPremiumClick={() => setShowPremiumModal(true)}
        />
      </div>

      <PremiumModal plans={plans} />
    </div>
  );
};