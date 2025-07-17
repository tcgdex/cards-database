import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Golbat",
         ja: "コガのゴルバット",
         fr: "Golbat de Koga",
         de: "Kogas Golbat",
         es: "Golbat de Koga",
         it: "Koga's Golbat",
         pt: "Golbat de Koga",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Sonic Scream",
            ja: "ソニックスクリーム",
            fr: "Cris sonore",
            de: "Schallschrei",
            es: "Grito sónico",
            it: "Sonic Scream",
            pt: "Sonic grito",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],


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
