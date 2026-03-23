import { Bath, Scissors, Stethoscope, Hotel, Baby, Truck, Syringe, Dog, ShoppingBag, Apple } from "lucide-react";

export interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  { icon: Bath, title: "Banho", description: "Banho completo com produtos de qualidade, secagem e perfume especial para seu pet." },
  { icon: Scissors, title: "Tosa", description: "Tosa higiênica e estética com profissionais experientes e carinhosos." },
  { icon: Stethoscope, title: "Veterinário", description: "Atendimento veterinário completo para cuidar da saúde do seu melhor amigo." },
  { icon: Hotel, title: "Hotel Pet", description: "Hospedagem confortável e segura para quando você precisar viajar." },
  { icon: Baby, title: "Creche", description: "Diversão e socialização garantida em um ambiente supervisionado e seguro." },
  { icon: Truck, title: "Transporte", description: "Leva e traz com conforto e segurança para seu pet." },
  { icon: Syringe, title: "Vacinação", description: "Vacinação em dia para manter seu pet protegido e saudável." },
  { icon: Dog, title: "Adestramento", description: "Treinamento comportamental com técnicas positivas e eficazes." },
  { icon: ShoppingBag, title: "Pet Shop", description: "Produtos selecionados: rações, brinquedos, acessórios e muito mais." },
  { icon: Apple, title: "Nutrição Animal", description: "Orientação nutricional personalizada para cada fase da vida do seu pet." },
];
