import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Ekans",
         ja: "コガのエカン",
         fr: "Ekans de Koga",
         de: "Kogas Ekans",
         es: "Ekans de Koga",
         it: "Ekan di Koga",
         pt: "Ekans de Koga",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [23],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Fast-Acting Poison",
            ja: "迅速な毒",
            fr: "Poison à action rapide",
            de: "Schnell wirkendes Gift",
            es: "Veneno de acción rápida",
            it: "Veleno ad azione rapida",
            pt: "Veneno de ação rápida",
          },
          effect: {
            en: "Flip 2 coins. If both are heads, the Defending Pokemon is now Confused and Poisoned.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは混乱し、毒されています。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, le Pokémon en défense est maintenant confus et empoisonné.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, ist das verteidigende Pokémon jetzt verwirrt und vergiftet.",
            es: "Flip 2 monedas. Si ambos son cabezas, el Pokémon defensor ahora está confundido y envenenado.",
            it: "Flip 2 monete. Se entrambi sono teste, il Pokemon in carica è ora confuso e avvelenato.",
            pt: "Flip 2 moedas. Se ambos são cabeças, o Pokémon atual agora está confuso e envenenado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
