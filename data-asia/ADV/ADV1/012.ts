import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Numel",
         ja: "numel",
         fr: "Numel",
         de: "Numel",
         es: "Numelismo",
         it: "Numel",
         pt: "Numel",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [322],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Burn Off",
            ja: "燃え尽きる",
            fr: "Brûler",
            de: "Abbrennen",
            es: "Quemar",
            it: "Bruciare",
            pt: "Queimar",
          },
          effect: {
            en: "Flip a coin. If heads, each Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御する各ポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, chaque Pokémon défendant est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird jedes verteidigende Pokémon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, cada Pokémon defensor ahora está quemado.",
            it: "Capovolgi una moneta. Se la testa, ogni Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, cada Pokemon defensor agora está queimado.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
