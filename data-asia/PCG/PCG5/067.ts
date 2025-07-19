import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Swablu",
         ja: "Swablu",
         fr: "Swablu",
         de: "Swablu",
         es: "Swablu",
         it: "Swablu",
         pt: "Swablu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Feathery",
            ja: "羽毛",
            fr: "Plumeur",
            de: "Feder",
            es: "Plumoso",
            it: "Piume",
            pt: "Penas",
          },
          effect: {
            en: "As long as Swablu is on your Bench, prevent all damage done to Swablu by opponent's attacks.",
            ja: "Swabluがあなたのベンチにある限り、相手の攻撃によってSwabluに与えられたすべての損害を防ぎます。",
            fr: "Tant que Swablu est sur votre banc, évitez tous les dégâts causés à Swablu par les attaques de l'adversaire.",
            de: "Solange Swablu auf Ihrer Bank ist, verhindern Sie alle Schäden, die Swablu durch Angriffe des Gegners angerichtet haben.",
            es: "Mientras Swablu esté en su banco, evite todo el daño hecho a Swablu por los ataques del oponente.",
            it: "Finché Swablu è in panchina, impedisci tutti i danni fatti su Swablu dagli attacchi dell'avversario.",
            pt: "Enquanto Swablu estiver em seu banco, evite todos os danos causados ao Swablu pelos ataques do oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Razor Wind",
            ja: "かみそりの風",
            fr: "Vent de rasoir",
            de: "Rasierender Wind",
            es: "Viento de afeitar",
            it: "Vento del rasoio",
            pt: "Vento de barbear",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
