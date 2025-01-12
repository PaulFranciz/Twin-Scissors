import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, Phone, PhoneIcon as WhatsApp, Check } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { useState } from 'react'
import { contactData } from './Data'

export default function CTASection() {
  const { toast } = useToast()
  const [copiedStates, setCopiedStates] = useState({ phone1: false, phone2: false })

  const copyToClipboard = (text: string, phone: 'phone1' | 'phone2') => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "The phone number has been copied to your clipboard.",
    })
    setCopiedStates(prev => ({ ...prev, [phone]: true }))
    setTimeout(() => setCopiedStates(prev => ({ ...prev, [phone]: false })), 2000)
  }

  const openWhatsApp = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone}`
    // Open WhatsApp in a new window with specific features
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
            {contactData.heading.main}
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              {contactData.heading.sub}
            </span>
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-lg md:text-xl px-8 py-6 rounded-full border-2 border-white/20 text-white 
                         bg-white/5 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 ease-out
                         transform hover:scale-105 active:scale-95"
              >
                Reach Out
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl animate-in fade-in-0 zoom-in-95">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-6 text-center text-white">
                  Get in Touch
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-6">
                {contactData.contacts.map((contact, index) => (
                  <div 
                    key={contact.phone} 
                    className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 
                             transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-white">{contact.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-400" />
                        <span className="text-gray-300">{contact.phone}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copyToClipboard(contact.phoneClean, index === 0 ? 'phone1' : 'phone2')}
                          className="relative hover:bg-white/10 text-white transition-all duration-300
                                   transform hover:scale-105 active:scale-95"
                        >
                          {copiedStates[index === 0 ? 'phone1' : 'phone2'] ? 
                            <Check className="h-4 w-4 text-green-400 animate-in fade-in-0 zoom-in-95" /> : 
                            <Copy className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openWhatsApp(contact.phoneClean)}
                          className="hover:bg-white/10 text-white transition-all duration-300
                                   transform hover:scale-105 active:scale-95"
                        >
                          <WhatsApp className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}