import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AddProfileCardProps {
  onAddProfile: () => void;
}

export function AddProfileCard({ onAddProfile }: AddProfileCardProps) {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={onAddProfile}>
      <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px] p-6">
        <Button 
          variant="ghost" 
          size="lg" 
          className="h-16 w-16 rounded-full border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/5"
          onClick={onAddProfile}
        >
          <Plus className="h-8 w-8 text-muted-foreground" />
        </Button>
        <p className="mt-4 text-sm font-medium text-muted-foreground">Add Profile</p>
      </CardContent>
    </Card>
  );
}