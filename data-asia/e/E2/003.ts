import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Grimer",
         ja: "グリマー",
         fr: "Sinistre",
         de: "Schmutz",
         es: "Mueca",
         it: "Grimer",
         pt: "Grimer",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [88],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Poison Sludge",
            ja: "毒スラッジ",
            fr: "Boues de poison",
            de: "Giftschlamm",
            es: "Lodo venenoso",
            it: "Fanghi velenosi",
            pt: "Lodo de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
        },
      ],

      retreat: 1,

};
