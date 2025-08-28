import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface AddProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddProfileModal({ open, onOpenChange }: AddProfileModalProps) {
  const [loading, setLoading] = useState(false);
  const [basicData, setBasicData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [socialData, setSocialData] = useState({
    instagram: "",
    youtube: ""
  });
  const { toast } = useToast();

  const handleSave = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          full_name: basicData.name,
          phone: basicData.phone,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
      
      onOpenChange(false);
      setBasicData({ name: "", email: "", phone: "" });
      setSocialData({ instagram: "", youtube: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Profile</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Enter Name*</Label>
              <Input
                id="name"
                placeholder="Eg. John Doe"
                value={basicData.name}
                onChange={(e) => setBasicData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Enter Email*</Label>
              <Input
                id="email"
                type="email"
                placeholder="Eg. john@email.com"
                value={basicData.email}
                onChange={(e) => setBasicData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Enter Phone*</Label>
              <Input
                id="phone"
                placeholder="Eg. 9123456789"
                value={basicData.phone}
                onChange={(e) => setBasicData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram Link (Optional)</Label>
              <Input
                id="instagram"
                placeholder="Eg. instagram.com/username"
                value={socialData.instagram}
                onChange={(e) => setSocialData(prev => ({ ...prev, instagram: e.target.value }))}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="youtube">Youtube Link (Optional)</Label>
              <Input
                id="youtube"
                placeholder="Eg. youtube.com/username"
                value={socialData.youtube}
                onChange={(e) => setSocialData(prev => ({ ...prev, youtube: e.target.value }))}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 pt-4">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Back
          </Button>
          <Button 
            onClick={handleSave}
            disabled={loading || !basicData.name || !basicData.email}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}