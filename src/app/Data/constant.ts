// import { Dot } from 'lucide-react';

import {temoin1,temoin2,temoin3,temoin4,temoin5,temoin6,temoin7,bgVidange,dechet,bgDechet,desinsectisation1,tondeuse1,espaceVerts,managerFemme,bgNetoyage,curage,gestionDechet,desinsectisation,femmeMenager,tondeuse,logo,logo1,logo2,logo3, Netoyage1,Netoyage2,Netoyage3,netoyageFemme,netoyageGp,tenoinFemme } from "../assets/img"
import {logoHP_PRESTIGE, flech } from "../assets/icon"

export const logoHpPrestige= logoHP_PRESTIGE
export const IMG= Netoyage2
//DATA MISSION VISION 

 export const DATA_MISSION_VISION=[
  {id:0,h1:"Notre Mission", p:"La protection de notre planète est au cœur de notre mission. Nous adoptons des pratiques de nettoyage durables et utilisons des produits respectueux de l’environnement. Notre objectif est de minimiser notre empreinte écologique tout en garantissant un service efficace et sûr."},
  {id:1,h1:"Notre Vision", p:"Chez HP Prestige, notre vision est de devenir le leader reconnu et respecté dans le domaine des services de nettoyage et d’entretien, en établissant de nouveaux standards d’excellence et de durabilité. Nous aspirons à être le partenaire privilégié pour nos clients, en leur offrant des solutions innovantes et personnalisées qui contribuent à créer des environnements propres, sains et agréables."}
 ]

//DATA TEMOIGNAGE

export const DATA_TEMOIGNAGE = [
  {
    id: 0,
    p: "Je fais appel à HP Prestige pour le nettoyage de mon domicile depuis plusieurs mois et je suis ravie du service. L'équipe est ponctuelle, professionnelle et laisse ma maison impeccable à chaque visite. Je recommande vivement !",
    img: temoin1,
    name: "Mathieu gohane :",
    work: "commercant",
    start:["start","start","start","start"]
  },
  {
    id: 1,
    p:"En tant que gérant d'une entreprise, il est crucial pour moi d'avoir des locaux propres et accueillants. HP Prestige fait un travail remarquable en assurant le nettoyage de nos bureaux. Leur flexibilité et leur attention aux détails sont exceptionnelles.",
    img: temoin2,
    name: "Pierre Lewis",
    work: "commercant",
    start:["start","start","start","start","start",]
  },
  {
      id: 2,
      p:"HP Prestige a transformé notre jardin en un véritable paradis. Leur équipe d'aménagement paysager a su créer un espace vert magnifique et facile à entretenir. Merci pour votre excellent travail !",
      img: temoin3,
      name: "Sophie Caren",
      work: "commercant",
      start:["start","start","start","start"]
  },
  {
  id: 3,
  p:"Nous avions un sérieux problème de nuisibles dans notre restaurant. HP Prestige est intervenu rapidement et a résolu le problème de manière efficace. Depuis, nous n'avons plus aucun souci de ce côté-là. Un service de grande qualité !",
  img: temoin4,
  name: "asher bamba ",
  work: "commercant",
  start:["start","start","start","start"]
  },
  {
  id: 4,
  p:"J'ai fait appel à HP Prestige pour la vidange de ma fosse septique et j'ai été impressionnée par leur professionnalisme et leur efficacité. L'équipe a travaillé rapidement et proprement. Je les recommande sans hésitation.",
  img: temoin5,
  name: "Philemon Kouame",
  work: "commercant",
  start:["start","start","start","start","start",]
  },
  {
  id: 5,
  p:"La gestion des déchets de notre entreprise est devenue beaucoup plus simple grâce à HP Prestige. Leur service de collecte et de tri est impeccable, et leur engagement en faveur de l'environnement est un plus indéniable.",
  img: temoin6,
  name: "Michel Lambert ",
  work: "commercant",
  start:["start","start","start","start","start",]
    },
  {
  id: 6,
  p:"Après une rénovation majeure de notre maison, nous avions besoin d'un grand nettoyage. HP Prestige a fait un travail extraordinaire, laissant chaque recoin de notre maison étincelant. Leur équipe est efficace et très amicale. Merci encore !",
  img: temoin7,
  name: "Isabelle Moreau",
  work: "commercant",
  start:["start","start","start","start","start",]
    },
  
];
// DATA CONTACTER FLECHE
export const DATA_CONTACTER_FLECHE= {
  h1:"Fait appel  a  votre special  maintenant ",
  fleche:flech,
}
//DATA CARD PRESANTATION
export const DATA_CARD_PRESANTATION={
  left:{
    h1:"Bienvenue chez HP Prestige ",
    p:["Chez HP Prestige qui est l'abréviation de ( hygiènePure Prestige ), nous sommes dédiés à fournir des services de nettoyage de la plus haute qualité pour répondre à tous vos besoins. Forts de notre expérience et de notre engagement envers l'excellence, nous nous efforçons de créer des environnements impeccables et sains pour nos clients.","Notre équipe qualifiée utilise des techniques et des produits de pointe pour garantir des résultats exceptionnels. Nous sommes fiers de notre engagement envers la satisfaction client, la fiabilité et l'attention aux détails."]
  },
  right:{
    img:Netoyage3
  }
}

//DATA SERVICE CREA

export const DATA_SERVICE_CREA={
  h1:"Nos services",
  h2:"Notre Equipe",
  btn:"En savoir plus",
  card:[
      {id:0,img:Netoyage3,h2:"Nettoyage et entretien des locaux",link:"/service/nettoyage et entretien des locaux",p:[
      {id:0,txt:"Nettoyage de Bureaux"},
      {id:1,txt:"Entretien des Espaces Communs"},
      {id:2,txt:"Nettoyage Spécialisé"},
      {id:3,txt:"Nettoyage Régulier et Ponctuel"},
      {id:4,txt:"Nettoyage Écologique"},
    ]},
    {id:1,img:femmeMenager,h2:"Netoyage a domicile",link:"/service/netoyage a domicile",p:[
      {id:0,txt:"Nettoyage Complet de la Maison"},
      {id:1,txt:"Entretien des Sols"},
      {id:2,txt:"Dépoussiérage et Désinfection"},
      {id:3,txt:"Nettoyage des Vitres"},
      {id:4,txt:"Entretien des Espaces Extérieurs"},
    ]},
    {id:2,img:tondeuse,h2:"Création et Entretien d'espace verts",link:"/service/creation et entretien d'espace verts",p:[
      {id:0,txt:"Conception de Jardins"},
      {id:1,txt:"Plantation et Aménagement Paysager"},
      {id:2,txt:"Entretien des Jardins"},
      {id:3,txt:"Entretien des Espaces Communs"},
      {id:4,txt:"Nettoyage et Entretien des Piscines"},
    ]},
    {id:3,img:desinsectisation,h2:"Dératisation et Désinsectisation",link:"/service/deratisation et desinsectisation"
,p:[
      {id:0,txt:"Dératisation"},
      {id:1,txt:"Désinsectisation"},
      {id:3,txt:"Inspection et Diagnostic"},
      {id:4,txt:"Lutte contre les reptiles"},
      {id:5,txt:"Fumigation des stocks"},
      
    ]}, 
    {id:4,img:gestionDechet,h2:"Gestion des déchets",link:"/service/gestion des dechets"
,p:[
      {id:0,txt:"Collecte des Déchets "},
      {id:1,txt:"Tri Sélectif"},
      {id:2,txt:"Recyclage"},
      {id:2,txt:"Gestion des Déchets Dangereux"},
      {id:2,txt:"Location de Bennes"},
      {id:2,txt:"Sensibilisation et Conseil"},
    ]},
    {id:5,img:curage,h2:"Vidange et Curage de Fosse Septique",link:"/service/vidange et vurage de fosse septique"
,p:[
      {id:0,txt:"Vidange de Fosse Septique"},
      {id:1,txt:"Curage de Fosse Septique"},
      {id:2,txt:"Inspection et Diagnostic"},
      {id:3,txt:"Entretien Préventif"},
      {id:4,txt:"Intervention d'Urgence"},
    ]},
    
  ]
}
//DATA PAGE NOTE FOUNDE SERVICES

export const DATA_PAGE_NOT_FOUND_SERVICES={
  header:{p:"PAGE NON TROUVER",img:bgNetoyage},

}

// DATA PAGE A PROPOS
 export const DATA_PAGE_APROPOS= {
  left:{
    h1:"À propos de HP Prestige",
    p:["Bienvenue chez HP Prestige, votre partenaire de confiance pour des solutions de nettoyage et d’entretien complètes. Fondée sur des valeurs d’excellence, de professionnalisme et de respect de l’environnement, notre entreprise s’engage à offrir des services de qualité supérieure pour répondre aux besoins variés de nos clients.","HP Prestige a été créée avec une vision claire : fournir des services de nettoyage et d’entretien qui dépassent les attentes de nos clients. Depuis notre création, nous avons bâti une réputation solide grâce à notre engagement envers la satisfaction client et notre souci constant de la qualité. Nous sommes fiers de servir à la fois des clients résidentiels et commerciaux, en leur offrant des solutions sur mesure adaptées à leurs exigences spécifiques."]
  },
  right:{
    img:Netoyage3
  }

 }

// ALL PAGE DYNAMIQUE 

export const DATA_PAGE_DYNAMIQUE=[
  {
    id:"nettoyage-et-entretien-des-locaux",
    header:{p:"Nettoyage et entretien des locaux",img:bgNetoyage},
    cardPresantation:{
      left:{
        h1:"Nettoyage et entretien des locaux",
        p:["Chez HP Prestige, nous nous engageons à offrir des services de nettoyage et d'entretien des locaux de la plus haute qualité. Que vous soyez une petite entreprise ou une grande organisation, nous adaptons nos solutions pour répondre à vos besoins spécifiques et garantir des environnements de travail impeccables et sains.",],
        prestation:{
          h2:"Nos Services Comprennent :",
          services:[
            {id:0,span1:"Nettoyage de Bureaux :",span2:" Des espaces de travail toujours propres et bien entretenus pour assurer la productivité et le bien-être de vos employés."},
            {id:1,span1:"Entretien des Espaces Communs :",span2:" Nettoyage des halls d'entrée, des couloirs, des salles de réunion et des zones de repos pour une présentation irréprochable."},
            {id:2,span1:"Nettoyage Spécialisé :",span2:" Services adaptés aux environnements spécifiques comme les établissements médicaux, les centres commerciaux, et les installations industrielles."},
            {id:3,span1:"Nettoyage Écologique :",span2:" Utilisation de produits respectueux de l'environnement pour un nettoyage efficace et durable."},
            {id:4,span1:"Nettoyage Régulier et Ponctuel :",span2:"Interventions programmées selon vos besoins, que ce soit quotidiennement, hebdomadairement, ou de manière ponctuelle."},
          ]
        }
      },
      right:{
        img:Netoyage3
      }
    }
  },
  {
    id:"netoyage-a-domicile",
    header:{p:"Netoyage a domicile",img:bgNetoyage},
    cardPresantation:{
      left:{
        h1:"Netoyage a domicile",
        p:["Chez HP Prestige, nous comprenons l'importance d'un foyer propre et bien entretenu. C'est pourquoi nous offrons des services de nettoyage à domicile sur mesure, adaptés à vos besoins spécifiques. Que vous ayez besoin d'un nettoyage régulier ou d'une intervention ponctuelle, notre équipe de professionnels qualifiés est là pour vous offrir des résultats impeccables."]
        ,prestation:{
          h2:"Nos Services Comprennent :",
          services:[
            {id:0,span1:"Nettoyage Complet de la Maison :",span2:" Du salon à la cuisine, en passant par les chambres et les salles de bains, nous nous assurons que chaque pièce de votre maison est propre et désinfectée."},
            {id:1,span1:"Entretien des Sols :",span2:" Nettoyage en profondeur des tapis, moquettes, carrelages, et parquets pour un sol impeccable."},
            {id:2,span1:"Dépoussiérage et Désinfection :",span2:" Élimination de la poussière et désinfection des surfaces fréquemment touchées pour un environnement plus sain."},
            {id:3,span1:"Nettoyage des Vitres : ",span2:" Des vitres transparentes et sans traces pour laisser entrer la lumière naturelle."},
            {id:4,span1:"Entretien des Espaces Extérieurs :",span2:"  Nettoyage des terrasses, balcons et autres espaces extérieurs pour une maison accueillante de l'intérieur à l'extérieur."},
          ]
        }    
      },
      right:{
        img:managerFemme
      }
    }
  },
  {
    id:"creation-et-entretien-espace-verts",
    header:{p:"Création et Entretien d'espace verts",img:espaceVerts},
    cardPresantation:{
      left:{
        h1:"Création et Entretien d'espace verts",
        p:["Chez HP Prestige, nous croyons que des espaces verts bien entretenus contribuent non seulement à l'esthétique de votre environnement, mais aussi à votre bien-être. Notre équipe de professionnels passionnés est dédiée à la création et à l'entretien de jardins et d'espaces verts, transformant vos extérieurs en véritables havres de paix."],
        prestation:{
          h2:"Nos Services Comprennent :",
          services:[
            {id:0,span1:"Conception de Jardins :",span2:" Nous travaillons avec vous pour concevoir des jardins sur mesure, adaptés à vos goûts et à l’architecture de votre propriété. De la sélection des plantes à l’aménagement paysager, chaque détail est pris en compte pour créer un espace unique et harmonieux."},
            {id:1,span1:"Plantation et Aménagement Paysager : ",span2:"  Mise en place de massifs fleuris, pelouses, haies et arbustes pour donner vie à vos espaces extérieurs. Nous choisissons les plantes en fonction de leur adaptation au climat et à votre sol."},
            {id:2,span1:"Entretien des Jardins :",span2:" Services réguliers de tonte de pelouse, taille des haies, désherbage, arrosage et fertilisation pour maintenir vos espaces verts en parfaite santé toute l’année."},
            {id:3,span1:"Entretien des Espaces Communs :",span2:" Nettoyage et entretien des allées, terrasses, et autres espaces extérieurs pour garantir un environnement propre et accueillant."},
            {id:4,span1:"Nettoyage et Entretien des Piscines :",span2:" Maintien de la propreté et de la qualité de l'eau de votre piscine pour un usage agréable et sécurisé."},
          ]
        } 
         
      },
      right:{
        img:tondeuse1
      }
    }
  },
  {
    id:"deratisation-et-desinsectisation",
    header:{p:"Dératisation et Désinsectisation",img:desinsectisation1},
    cardPresantation:{
      left:{
        h1:"Dératisation et Désinsectisation",
        p:["Chez HP Prestige, nous savons combien il est crucial de maintenir un environnement sain et exempt de nuisibles. Nos services de dératisation et de désinsectisation sont conçus pour protéger vos espaces résidentiels et commerciaux contre les infestations, garantissant ainsi la sécurité et le bien-être de tous."]
       ,  prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Dératisation :",span2:" Élimination efficace des rongeurs (rats, souris) à l’aide de techniques avancées et de produits sûrs. Nous identifions les points d’entrée et les zones d’activité pour une intervention ciblée et durable."},
          {id:1,span1:"Désinsectisation :",span2:" Éradication des insectes nuisibles (cafards, fourmis, punaises de lit, guêpes, moustiques) grâce à des traitements adaptés. Nous utilisons des solutions efficaces pour éliminer les infestations et prévenir leur réapparition."},
          {id:2,span1:"Prévention :",span2:" Mise en place de mesures préventives pour empêcher le retour des nuisibles, incluant des conseils pratiques et des solutions de protection durables."},
          {id:3,span1:"Inspection et Diagnostic :",span2:" Évaluation approfondie de vos locaux pour détecter les signes de présence de nuisibles et déterminer la meilleure stratégie d’intervention."},
        ]
      } 
      },
      right:{
        img:desinsectisation
      }
    }
  },
  {
    id:"gestion-des-dechets",
    header:{p:"Gestion des déchets",img:bgDechet},
    cardPresantation:{
      left:{
        h1:"Gestion des déchets",
        p:["Chez HP Prestige, nous comprenons l'importance d'une gestion efficace et responsable des déchets pour maintenir un environnement propre et sain. Nos services de gestion des déchets sont conçus pour répondre aux besoins des particuliers et des entreprises, en assurant une collecte, un tri et un traitement optimaux de tous types de déchets."]
        ,  prestation:{
          h2:"Nos Services Comprennent :",
          services:[
            {id:0,span1:"Collecte des Déchets :",span2:" Ramassage régulier des déchets ménagers, commerciaux et industriels, avec des horaires flexibles adaptés à vos besoins spécifiques."},
            {id:1,span1:"Tri Sélectif :",span2:" Mise en place de solutions de tri pour séparer les déchets recyclables, organiques et non-recyclables, favorisant ainsi une gestion écologique des déchets."},
            {id:2,span1:"Recyclage :",span2:" Envoi des matériaux recyclables vers des centres de recyclage certifiés pour leur revalorisation, contribuant ainsi à la réduction de l'empreinte carbone."},
            {id:3,span1:"Gestion des Déchets Dangereux :",span2:" Collecte et traitement sécurisés des déchets dangereux (produits chimiques, batteries, équipements électroniques) conformément aux réglementations en vigueur."},
            {id:4,span1:"Location de Bennes :",span2:" Mise à disposition de bennes de différentes tailles pour des projets de construction, de rénovation ou de nettoyage de grande envergure."},
            {id:5,span1:"Sensibilisation et Conseil :",span2:" Formation et sensibilisation sur les bonnes pratiques de gestion des déchets pour encourager des comportements respectueux de l’environnement."},
  
          ]
        } 
      },
      right:{
        img:dechet
      }
    }
  },
  {
    id:"vidange-et-vurage-de-fosse-septique",
    header:{p:"Vidange et Curage de Fosse Septique",img:bgVidange},
    cardPresantation:{
      left:{
        h1:"Vidange et Curage de Fosse Septique",
        p:["Chez HP Prestige, nous offrons des services complets de vidange et de curage de fosse septique pour garantir le bon fonctionnement et la longévité de votre système d’assainissement. Nos équipes de professionnels qualifiés sont équipées des dernières technologies pour assurer des interventions rapides, efficaces et respectueuses de l'environnement."]
        ,  prestation:{
          h2:"Nos Services Comprennent :",
          services:[
            {id:0,span1:"Vidange de Fosse Septique :",span2:" Nous procédons à la vidange régulière de votre fosse septique pour éviter les engorgements et les dysfonctionnements. Notre intervention permet de retirer les boues et les matières solides accumulées, garantissant ainsi le bon fonctionnement de votre système."},
            {id:1,span1:"Curage de Fosse Septique :",span2:" Nettoyage en profondeur de votre fosse septique et de ses canalisations pour éliminer les dépôts de graisse, les obstructions et les résidus. Le curage permet de restaurer la capacité optimale de votre installation et de prévenir les problèmes futurs."},
            {id:2,span1:"Inspection et Diagnostic :",span2:" Évaluation complète de l’état de votre fosse septique à l’aide de caméras d’inspection pour détecter d’éventuels dommages ou anomalies. Nous vous fournissons un rapport détaillé et des recommandations pour l’entretien ou les réparations nécessaires."},
            {id:3,span1:"Entretien Préventif :",span2:" Programmes d’entretien régulier pour assurer la longévité et l’efficacité de votre système d’assainissement. Un entretien préventif permet de réduire les risques de pannes et de prolonger la durée de vie de votre fosse septique."},
            {id:4,span1:"Intervention d'Urgence :",span2:" Service d’urgence disponible pour répondre rapidement à tout problème de fosse septique, minimisant ainsi les désagréments et les risques sanitaires."},
          ]
        } 
      },
      right:{
        img:curage
      }
    }
  },
  

]

//DATA PAGE SERVICE ENTRETIEN LOCAUX
export const DATA_PAGE_ENTRETIEN_DES_LOCAUX={
  header:{p:"Nettoyage et entretien des locaux",img:bgNetoyage},
  cardPresantation:{
    left:{
      h1:"Nettoyage et entretien des locaux",
      p:["Chez HP Prestige, nous nous engageons à offrir des services de nettoyage et d'entretien des locaux de la plus haute qualité. Que vous soyez une petite entreprise ou une grande organisation, nous adaptons nos solutions pour répondre à vos besoins spécifiques et garantir des environnements de travail impeccables et sains.",],
      prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Nettoyage de Bureaux :",span2:" Des espaces de travail toujours propres et bien entretenus pour assurer la productivité et le bien-être de vos employés."},
          {id:1,span1:"Entretien des Espaces Communs :",span2:" Nettoyage des halls d'entrée, des couloirs, des salles de réunion et des zones de repos pour une présentation irréprochable."},
          {id:2,span1:"Nettoyage Spécialisé :",span2:" Services adaptés aux environnements spécifiques comme les établissements médicaux, les centres commerciaux, et les installations industrielles."},
          {id:3,span1:"Nettoyage Écologique :",span2:" Utilisation de produits respectueux de l'environnement pour un nettoyage efficace et durable."},
          {id:4,span1:"Nettoyage Régulier et Ponctuel :",span2:"Interventions programmées selon vos besoins, que ce soit quotidiennement, hebdomadairement, ou de manière ponctuelle."},
        ]
      }
    },
    right:{
      img:Netoyage3
    }
  }
}
//DATA PAGE SERVICE NETOYAGE A DOMICILE
export const DATA_PAGE_NETOYAGE_A_DOMICILE={
  header:{p:"Netoyage a domicile",img:bgNetoyage},
  cardPresantation:{
    left:{
      h1:"Netoyage a domicile",
      p:["Chez HP Prestige, nous comprenons l'importance d'un foyer propre et bien entretenu. C'est pourquoi nous offrons des services de nettoyage à domicile sur mesure, adaptés à vos besoins spécifiques. Que vous ayez besoin d'un nettoyage régulier ou d'une intervention ponctuelle, notre équipe de professionnels qualifiés est là pour vous offrir des résultats impeccables."]
      ,prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Nettoyage Complet de la Maison :",span2:" Du salon à la cuisine, en passant par les chambres et les salles de bains, nous nous assurons que chaque pièce de votre maison est propre et désinfectée."},
          {id:1,span1:"Entretien des Sols :",span2:" Nettoyage en profondeur des tapis, moquettes, carrelages, et parquets pour un sol impeccable."},
          {id:2,span1:"Dépoussiérage et Désinfection :",span2:" Élimination de la poussière et désinfection des surfaces fréquemment touchées pour un environnement plus sain."},
          {id:3,span1:"Nettoyage des Vitres : ",span2:" Des vitres transparentes et sans traces pour laisser entrer la lumière naturelle."},
          {id:4,span1:"Entretien des Espaces Extérieurs :",span2:"  Nettoyage des terrasses, balcons et autres espaces extérieurs pour une maison accueillante de l'intérieur à l'extérieur."},
        ]
      }    
    },
    right:{
      img:managerFemme
    }
  }
}

//DATA PAGE SERVICE CREATION D'ESPACE VERTE
export const DATA_PAGE_CREATION_ESPACE_VERTE={
  header:{p:"Création et Entretien d'espace verts",img:espaceVerts},
  cardPresantation:{
    left:{
      h1:"Création et Entretien d'espace verts",
      p:["Chez HP Prestige, nous croyons que des espaces verts bien entretenus contribuent non seulement à l'esthétique de votre environnement, mais aussi à votre bien-être. Notre équipe de professionnels passionnés est dédiée à la création et à l'entretien de jardins et d'espaces verts, transformant vos extérieurs en véritables havres de paix."],
      prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Conception de Jardins :",span2:" Nous travaillons avec vous pour concevoir des jardins sur mesure, adaptés à vos goûts et à l’architecture de votre propriété. De la sélection des plantes à l’aménagement paysager, chaque détail est pris en compte pour créer un espace unique et harmonieux."},
          {id:1,span1:"Plantation et Aménagement Paysager : ",span2:"  Mise en place de massifs fleuris, pelouses, haies et arbustes pour donner vie à vos espaces extérieurs. Nous choisissons les plantes en fonction de leur adaptation au climat et à votre sol."},
          {id:2,span1:"Entretien des Jardins :",span2:" Services réguliers de tonte de pelouse, taille des haies, désherbage, arrosage et fertilisation pour maintenir vos espaces verts en parfaite santé toute l’année."},
          {id:3,span1:"Entretien des Espaces Communs :",span2:" Nettoyage et entretien des allées, terrasses, et autres espaces extérieurs pour garantir un environnement propre et accueillant."},
          {id:4,span1:"Nettoyage et Entretien des Piscines :",span2:" Maintien de la propreté et de la qualité de l'eau de votre piscine pour un usage agréable et sécurisé."},
        ]
      } 
       
    },
    right:{
      img:tondeuse1
    }
  }
}
//DATA PAGE SERVICE DERATISATION ET DÉSINSECTISATION
export const DATA_PAGE_DERATISATION_DESINSECTISATION={
  header:{p:"Dératisation et Désinsectisation",img:desinsectisation1},
  cardPresantation:{
    left:{
      h1:"Dératisation et Désinsectisation",
      p:["Chez HP Prestige, nous savons combien il est crucial de maintenir un environnement sain et exempt de nuisibles. Nos services de dératisation et de désinsectisation sont conçus pour protéger vos espaces résidentiels et commerciaux contre les infestations, garantissant ainsi la sécurité et le bien-être de tous."]
     ,  prestation:{
      h2:"Nos Services Comprennent :",
      services:[
        {id:0,span1:"Dératisation :",span2:" Élimination efficace des rongeurs (rats, souris) à l’aide de techniques avancées et de produits sûrs. Nous identifions les points d’entrée et les zones d’activité pour une intervention ciblée et durable."},
        {id:1,span1:"Désinsectisation :",span2:" Éradication des insectes nuisibles (cafards, fourmis, punaises de lit, guêpes, moustiques) grâce à des traitements adaptés. Nous utilisons des solutions efficaces pour éliminer les infestations et prévenir leur réapparition."},
        {id:2,span1:"Prévention :",span2:" Mise en place de mesures préventives pour empêcher le retour des nuisibles, incluant des conseils pratiques et des solutions de protection durables."},
        {id:3,span1:"Inspection et Diagnostic :",span2:" Évaluation approfondie de vos locaux pour détecter les signes de présence de nuisibles et déterminer la meilleure stratégie d’intervention."},
      ]
    } 
    },
    right:{
      img:desinsectisation
    }
  }
}
//DATA PAGE SERVICE GESTION  DES DÉCHETS
export const DATA_PAGE_GESTION_DECHETS={
  header:{p:"Gestion des déchets",img:bgDechet},
  cardPresantation:{
    left:{
      h1:"Gestion des déchets",
      p:["Chez HP Prestige, nous comprenons l'importance d'une gestion efficace et responsable des déchets pour maintenir un environnement propre et sain. Nos services de gestion des déchets sont conçus pour répondre aux besoins des particuliers et des entreprises, en assurant une collecte, un tri et un traitement optimaux de tous types de déchets."]
      ,  prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Collecte des Déchets :",span2:" Ramassage régulier des déchets ménagers, commerciaux et industriels, avec des horaires flexibles adaptés à vos besoins spécifiques."},
          {id:1,span1:"Tri Sélectif :",span2:" Mise en place de solutions de tri pour séparer les déchets recyclables, organiques et non-recyclables, favorisant ainsi une gestion écologique des déchets."},
          {id:2,span1:"Recyclage :",span2:" Envoi des matériaux recyclables vers des centres de recyclage certifiés pour leur revalorisation, contribuant ainsi à la réduction de l'empreinte carbone."},
          {id:3,span1:"Gestion des Déchets Dangereux :",span2:" Collecte et traitement sécurisés des déchets dangereux (produits chimiques, batteries, équipements électroniques) conformément aux réglementations en vigueur."},
          {id:4,span1:"Location de Bennes :",span2:" Mise à disposition de bennes de différentes tailles pour des projets de construction, de rénovation ou de nettoyage de grande envergure."},
          {id:5,span1:"Sensibilisation et Conseil :",span2:" Formation et sensibilisation sur les bonnes pratiques de gestion des déchets pour encourager des comportements respectueux de l’environnement."},

        ]
      } 
    },
    right:{
      img:dechet
    }
  }
}

//DATA PAGE VIDANGE ET CURAGE DE FOSSE SEPTIQUE
export const DATA_PAGE_VIDANGE={
  header:{p:"Vidange et Curage de Fosse Septique",img:bgVidange},
  cardPresantation:{
    left:{
      h1:"Vidange et Curage de Fosse Septique",
      p:["Chez HP Prestige, nous offrons des services complets de vidange et de curage de fosse septique pour garantir le bon fonctionnement et la longévité de votre système d’assainissement. Nos équipes de professionnels qualifiés sont équipées des dernières technologies pour assurer des interventions rapides, efficaces et respectueuses de l'environnement."]
      ,  prestation:{
        h2:"Nos Services Comprennent :",
        services:[
          {id:0,span1:"Vidange de Fosse Septique :",span2:" Nous procédons à la vidange régulière de votre fosse septique pour éviter les engorgements et les dysfonctionnements. Notre intervention permet de retirer les boues et les matières solides accumulées, garantissant ainsi le bon fonctionnement de votre système."},
          {id:1,span1:"Curage de Fosse Septique :",span2:" Nettoyage en profondeur de votre fosse septique et de ses canalisations pour éliminer les dépôts de graisse, les obstructions et les résidus. Le curage permet de restaurer la capacité optimale de votre installation et de prévenir les problèmes futurs."},
          {id:2,span1:"Inspection et Diagnostic :",span2:" Évaluation complète de l’état de votre fosse septique à l’aide de caméras d’inspection pour détecter d’éventuels dommages ou anomalies. Nous vous fournissons un rapport détaillé et des recommandations pour l’entretien ou les réparations nécessaires."},
          {id:3,span1:"Entretien Préventif :",span2:" Programmes d’entretien régulier pour assurer la longévité et l’efficacité de votre système d’assainissement. Un entretien préventif permet de réduire les risques de pannes et de prolonger la durée de vie de votre fosse septique."},
          {id:4,span1:"Intervention d'Urgence :",span2:" Service d’urgence disponible pour répondre rapidement à tout problème de fosse septique, minimisant ainsi les désagréments et les risques sanitaires."},
        ]
      } 
    },
    right:{
      img:curage
    }
  }
}

//DATA CARD PRESANTATION EQUIPE
export const DATA_CARD_PRESANTATION_EQUIPE={
  left:{
    h1:"Nous prenons soin des intervenants pour qu'ils prennent soin de vous.",
    p:["Chez HP Prestige, nous croyons que la qualité de notre service commence par la qualité de notre équipe. Nous investissons dans la formation continue et le développement professionnel de nos employés pour nous assurer qu'ils sont équipés pour fournir le meilleur service possible. Ensemble, nous nous engageons à créer des environnements propres, sains et accueillants pour nos clients.",'']
  },
  right:{
    img:netoyageFemme
  }
}


//DATA IMAGE SLIDER
export const DATA_IMAGE_SLIDER={
  p1:"Service de nettoyage et d'entretien",
  p2:"pour une vie propre et excellente",
  span:"Contacter-nous →",
  img:[
  "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/photos-gratuite/sourire-tenant-pointe-vers-seau-outils-nettoyage-jeune-homme-nettoyeur-afro-americain-uniforme-gants-isoles-fond-vert_141793-135154.jpg?t=st=1718991145~exp=1718994745~hmac=6f351a8edba363492a7c1a009e3333ad028cd7a3b23a8f20d285d5abd3386f75&w=900",
  "https://cdn.pixabay.com/photo/2014/04/10/10/09/lawn-mower-320799_1280.jpg",
  "https://img.freepik.com/photos-gratuite/personnes-portant-equipement-protection-pour-desinfecter-zone-dangereuse_23-2148848600.jpg?t=st=1719347154~exp=1719350754~hmac=8f8da22883e6dd828724ba0dc5111519e668fbb8d33deef1f09622dbc9c8673a&w=900",

]}
// DATA NAVLINK
export const DATA_NAV_LINK= [
  {id:0,name: "Acceuil", link: "/" },
  {id:1, name: "Services", link: "",sousLink:[
    {id:0,name:"Nettoyage et Entretien des Locaux",link:"/service/nettoyage-et-entretien-des-locaux"},
    {id:1,name:"Netoyage a Domicile",link:"/service/netoyage-a-domicile"},
    {id:2,name:"Creation et Entretien d'espace verts",link:"/service/creation-et-entretien-espace-verts"},
    {id:3,name:"Deratisation et Desinsectisation",link:"/service/deratisation-et-desinsectisation"},
    {id:4,name:"Gestion des dechets",link:"/service/gestion-des-dechets"},
    {id:5,name:"Vidange et Vurage de fosse septique",link:"/service/vidange-et-vurage-de-fosse-septique"},

  ]},
  {id:2, name: "Apropos De Nos", link: "/apropos" },
  {id:3, name: "Contacts", link: "/contact" },
];

// Partenaire
  export const DATA_PARTENAIRE = {
    h1:"ILS NOUS FONT CONFIANCE",
    logo:[logo1,logo2,logo3,logo2,logo1,logo3,logo3,logo2
  
    ],
  }

  // DATA CONTACTER

  export  const DATA_CONTACT = {
    left :{
      h1: " Nous contacter", 
      p1: "Venez échanger avec nous à propos de vos besoins, votre problématique ou tout simplement pour faire notre connaissance",
      coordonnees:{
        h3:"Nos coordonnées",
        num:"05 44 34 44 10",
        lenkSite:"www.HPprestige.com",
      },
      adresse:{
        h3:"Adresse",
        rue:"Abidjan 1 cocody angre 8eme tranche",
      }
    },
    right:{
      form:{
        inputs:{
          inputNom :{type:"text",nom:"Nom"},
          inputPrenom :{type:"text",nom:"Prenom"},
          inputEmail :{type:"email",nom:"Email"},
          inputEntreprise :{type:"text",nom:"Entreprise"},
          inputTelephone :{type:"tel",nom:"Telephone"},
          inputMessage :{type:"number",nom:"Message",rows:3,},
          inputCheckbox :{type:"Checkbox",nom:"Checkbox"},
          inputlabel :{htmlFor:"Checkbox",text:"I accept to receive emails from Royal Cheese Digital"},
          btn: {type:"submit",text:"Envoyé",}
        }
      }
    }
  }