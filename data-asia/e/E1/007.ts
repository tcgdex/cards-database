import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Ponyta",
         ja: "ポニータ",
         fr: "Ponyta",
         de: "Ponyta",
         es: "Ponyta",
         it: "Ponyta",
         pt: "Ponyta",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [77],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Singe",
            ja: "シング",
            fr: "Roussir",
            de: "Versengen",
            es: "Chamuscar",
            it: "Singe",
            pt: "Singe",
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
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 20,
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
