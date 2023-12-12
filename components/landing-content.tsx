"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mark Zuckerberg",
    avatar: "J",
    title: "CEO",
    description: "C'est la meilleure application que j'ai eu l'occasion d'utiliser"
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "Je m'en sers tous les jours afin de produire de nouvelles photos ",
  },
  {
    name: "Miguel Antonio",
    avatar: "M",
    title: "Developpeur",
    description: "Cette appli m'a transformé la vie, impossible de bosser sans",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "Haut de gamme, prendre l'abonnement premium est pleinement justifié",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Avis clients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}