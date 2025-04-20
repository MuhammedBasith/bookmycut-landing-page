
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-2">
        <Input 
          placeholder="Name" 
          className="w-full transition-all border-slate-200 focus:border-purple-500 hover:border-purple-500" 
        />
      </div>
      <div className="space-y-2">
        <Input 
          type="email" 
          placeholder="Email" 
          className="w-full transition-all border-slate-200 focus:border-purple-500 hover:border-purple-500" 
        />
      </div>
      <div className="space-y-2">
        <Textarea 
          placeholder="Message" 
          className="w-full min-h-[120px] transition-all border-slate-200 focus:border-purple-500 hover:border-purple-500" 
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
        Send Message
      </Button>
    </form>
  );
}
