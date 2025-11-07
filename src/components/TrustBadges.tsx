import { Shield, Zap, Users, Lock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    text: "Secure Payment",
  },
  {
    icon: Zap,
    text: "Instant Access",
  },
  {
    icon: Users,
    text: "500+ Users",
  },
  {
    icon: Lock,
    text: "Money-Back Guarantee",
  },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
