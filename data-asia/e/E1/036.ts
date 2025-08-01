import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Punch",
            ja: "パンチ",
            fr: "Punch",
            de: "Stempel",
            es: "Puñetazo",
            it: "Punch",
            pt: "Soco",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
