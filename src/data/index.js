import 
{
    Target,Heart,BookOpen,Users,Globe,Leaf,Building,HandHeart,TrendingUp,Recycle,Camera,Shirt,Award
} from 'lucide-react';

export const sdgData = [
{id:1, title:"Pas de pauvreté", color:"#E5243B", icon: Target},
{id:2, title:"Faim Zéro", color:"#DDA63A", icon: Heart},
{id:4, title:"Éducation de qualité", color:"#C5192D", icon: BookOpen},
{id:5, title:"Égalité des sexes", color:"#FF3A21", icon: Users},
{id:14, title:"Vie aquatique", color:"#0BB9D7", icon: Globe},
{id:15, title:"Vie terrestre", color:"#3EB049", icon: Leaf},
{id:17, title: "Partenariats", color:"#19486A", icon: Building},
] ;

export const programsData = [
    {
        id:1 ,
        name: "ZARA AINA",
        categories:["Social"],
        description: "Aide alimentaire et produits de nécessité pour les communautés vulnérables.",
        icon: HandHeart,
    },
    {
        id:2 ,
        name: "TBM-ATHLÉTISME",
        categories:["Social","Culture"],
        description: "Sport et dépassement de soi pour la jeunesse malagasy.",
        icon: TrendingUp,
    },
    {
    id: 3,
    name: "FA.FI.HAI.",
    categories: ["Éducation"],
    description: "Communication et partage de connaissances pour tous.",
    icon: BookOpen,
  },
  {
    id: 4,
    name: "TOUR BE MADA",
    categories: ["Culture", "Écologie"],
    description: "Tourisme durable et solidaire à Madagascar.",
    icon: Globe,
  },
  {
    id: 5,
    name: "TSO.TRA",
    categories: ["Écologie"],
    description: "Tri sélectif et compostage pour un environnement propre.",
    icon: Recycle,
  },
  {
    id: 6,
    name: "ART'RAOTY",
    categories: ["Écologie", "Culture"],
    description: "Recyclage artistique et créatif au service de l'environnement.",
    icon: Camera,
  },
  {
    id: 7,
    name: "FIJERY MALAGASY",
    categories: ["Culture", "Social"],
    description: "Mode éthique et emploi pour les communautés locales.",
    icon: Shirt,
  },

];
export const timelineData = [
    {
        year: "2023",
        title: "Formation",
        description:"Création de TOKONTANY BE MALAGASY avec la vision d'un impact social durable ancré dans les valeurs malgaches.",
    },
      {
    year: "2024",
    title: "Expansion",
    description:
      "Lancement des premiers programmes sociaux et écologiques dans plusieurs régions de Madagascar.",
  },
  {
    year: "2025",
    title: "Consolidation",
    description:
      "Renforcement des partenariats stratégiques et élargissement significatif de notre portée communautaire.",
  },
];
 
export const valuesData = [
  {
    title: "FIHAVANANA",
    description:
      "Le lien social et la solidarité au cœur de notre action communautaire, inspiré de la tradition malgache.",
    icon: Heart,
  },
  {
    title: "Engagement",
    description:
      "Une détermination sans faille pour construire un avenir meilleur et durable à Madagascar.",
    icon: Award,
  },
  {
    title: "Inclusion",
    description:
      "L'accessibilité et l'équité pour chaque membre de notre communauté, sans distinction.",
    icon: Users,
  },

];

export const categories = ["Tous", "Social", "Écologie", "Éducation", "Culture"];

export const categoryColors = {
  Social:    "#C84B31",
  Écologie:  "#3EB049",
  Éducation: "#19486A",
  Culture:   "#DDA63A",
};

export const navLinks = [
  { name: "Accueil",    href: "#accueil"    },
  { name: "Missions",   href: "#missions"   },
  { name: "Programmes", href: "#programmes" },
  { name: "Parcours",   href: "#parcours"   },
  { name: "Valeurs",    href: "#valeurs"    },
];
