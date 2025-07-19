import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Torchic",
         ja: "トーチ",
         fr: "Torchique",
         de: "Torchic",
         es: "Torca",
         it: "Tortico",
         pt: "Torchic",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [255],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Super Singe",
            ja: "スーパーシング",
            fr: "Super singe",
            de: "Super singen",
            es: "Super Singe",
            it: "Super Singe",
            pt: "Super Singe",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant brûlé.",
            de: "Eine Münze drehen. Wenn Köpfe, wird das verteidigende Pokemon jetzt verbrannt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora se quema.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in difesa viene ora bruciato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está queimado.",
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
