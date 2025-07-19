import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto (Delta Species)",
         ja: "カブト（デルタ種）",
         fr: "Kabuto (espèces delta)",
         de: "Kabuto (Delta -Arten)",
         es: "Kabuto (especie delta)",
         it: "Kabuto (specie delta)",
         pt: "Kabuto (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [140],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Eerie Light",
            ja: "不気味な光",
            fr: "Lumière étrange",
            de: "Unheimliches Licht",
            es: "Luz misteriosa",
            it: "Luce inquietante",
            pt: "Luz estranha",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Shell Attack",
            ja: "シェル攻撃",
            fr: "Attaque de coquille",
            de: "Muschelangriff",
            es: "Ataque",
            it: "Attacco a conchiglia",
            pt: "Ataque de concha",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
