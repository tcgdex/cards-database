import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Skiploom",
         ja: "スキプルーム",
         fr: "Skiploom",
         de: "Skiplom",
         es: "Skiploom",
         it: "Skiploom",
         pt: "SkiPloom",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [188],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hop",
            ja: "ホップ",
            fr: "Houblon",
            de: "Hüpfen",
            es: "Brincar",
            it: "Salto",
            pt: "Saltar",
          },
          damage: 20,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Mysterious Powder",
            ja: "神秘的なパウダー",
            fr: "Poudre mystérieuse",
            de: "Mysteriöses Pulver",
            es: "Polvo misterioso",
            it: "Polvere misteriosa",
            pt: "Pó misterioso",
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
          damage: 10,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
