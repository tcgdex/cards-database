import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Weezing",
         ja: "ジャニーンのおしっこ",
         fr: "Janine's Weezing",
         de: "Janine ist klein",
         es: "Weezing de Janine",
         it: "Janine's Weezing",
         pt: "Janine's Weezing",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [110],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Smog",
            ja: "スモッグ",
            fr: "Smog",
            de: "SMOG",
            es: "Niebla tóxica",
            it: "Smog",
            pt: "Fumaça",
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
          damage: 20,
        },
      ],

      retreat: 1,

};
