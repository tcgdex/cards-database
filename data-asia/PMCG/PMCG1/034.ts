import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados",
         ja: "ギャラドス",
         fr: "Gyarados",
         de: "Gyarados",
         es: "Gyarados",
         it: "Gyarados",
         pt: "Gyarados",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Dragon Rage",
            ja: "ドラゴンレイジ",
            fr: "Rage de dragon",
            de: "Dragon Wut",
            es: "Rabia de dragón",
            it: "Rage del drago",
            pt: "RAGA DA DRAGON",
          },
          damage: 50,
        },
        {
          cost: ["Water", "Water", "Water", "Water"],
          name: {
            en: "Bubblebeam",
            ja: "バブルビーム",
            fr: "Rayon de bubbler",
            de: "BubbleBeam",
            es: "Rayo de burbuja",
            it: "Bubblebeam",
            pt: "Bubblebeam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
