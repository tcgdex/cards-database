import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Ponyta",
         ja: "ブレインのポニータ",
         fr: "Ponyta de Blaine",
         de: "Blaines Ponyta",
         es: "Ponyta de Blaine",
         it: "Blaine's Ponyta",
         pt: "Ponyta de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [77],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Hind Kick",
            ja: "ハインドキック",
            fr: "Coup de pied arrière",
            de: "Hinterkick",
            es: "Patada trasera",
            it: "Calcio posteriore",
            pt: "Chute traseiro",
          },
          effect: {
            en: "If you have any Benched Pokemon, flip a coin. If heads, switch Blaine's Ponyta with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、1匹のベンチポケモンでブレインのポニータを切り替えます。",
            fr: "Si vous avez des pokemon bancés, retournez une pièce. Si les têtes, changez de ponyta de Blaine avec 1 de votre pokemon banc.",
            de: "Wenn Sie ein Bank -Pokemon haben, drehen Sie eine Münze. Wenn Sie Köpfe haben, wechseln Sie Blaines Ponyta mit einem Ihrer Bankpokémon.",
            es: "Si tienes algún Pokémon de banca, voltea una moneda. Si se dirige, cambie de Ponyta de Blaine con 1 de sus pokemon de banca.",
            it: "Se hai dei Pokemon in panchina, capovolgi una moneta. Se la testa, cambia Blaine's Ponyta con 1 del tuo Pokemon in panchina.",
            pt: "Se você tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, trocam o Ponyta de Blaine com 1 do seu Pokémon em banco.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
