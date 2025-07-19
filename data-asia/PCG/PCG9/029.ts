import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix (Delta Species)",
         ja: "Vulpix（デルタ種）",
         fr: "Vulpix (espèces delta)",
         de: "Vulpix (Delta -Arten)",
         es: "Vulpix (especie delta)",
         it: "Vulpix (Delta Species)",
         pt: "Vulpix (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hypnotic Gaze",
            ja: "催眠術",
            fr: "Regard hypnotique",
            de: "Hypnotischer Blick",
            es: "Mirada hipnótica",
            it: "Sguardo ipnotico",
            pt: "Olhar hipnótico",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Will-o'-the-Wisp",
            ja: "will-o'-the-wisp",
            fr: "Will-o'-le-wisp",
            de: "Will-o'-the-wisp",
            es: "Will-o'-the-wisp",
            it: "Will-O'-The-Wisp",
            pt: "Will-o'-the-wisp",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
