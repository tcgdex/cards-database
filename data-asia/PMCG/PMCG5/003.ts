import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Oddish (Lv.10)",
         ja: "エリカの奇妙な（LV.10）",
         fr: "Erika est Oddish (LV.10)",
         de: "Erikas seltsamer (lv.10)",
         es: "Erika's Oddish (LV.10)",
         it: "Erika's Oddish (Lv.10)",
         pt: "Erika de Erika (LV.10)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Strange Powder",
            ja: "奇妙な粉",
            fr: "Poudre étrange",
            de: "Seltsames Pulver",
            es: "Polvo extraño",
            it: "Strana polvere",
            pt: "Pó estranho",
          },
          effect: {
            en: "Flip a coin.  If heads, the Defending Pokemon is now Confused; if tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。  頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce.  Si les têtes, le Pokémon en défense est maintenant confus; Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen.  Wenn Köpfe, ist das verteidigende Pokemon jetzt verwirrt; Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda.  Si se dirige, el Pokémon defensor ahora está confundido; Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta.  Se la testa, il Pokemon in carica è ora confuso; Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda.  Se as cabeças, o pokemon atual agora está confuso; Se as caudas, o pokemon defensor agora está dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
