import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Weepinbell",
         ja: "weepinbell",
         fr: "Weepinbell",
         de: "Weepinbell",
         es: "Llanura",
         it: "Weepinbell",
         pt: "Weepinbell",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [70],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Razor Leaf",
            ja: "かみそりの葉",
            fr: "Feuille de rasoir",
            de: "Rasiererblatt",
            es: "Hojas de afeitar",
            it: "Foglia di rasoio",
            pt: "Folha de barbear",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Corrosive Acid",
            ja: "腐食性酸",
            fr: "Acide corrosif",
            de: "Ätzende Säure",
            es: "Ácido corrosivo",
            it: "Acido corrosivo",
            pt: "Ácido corrosivo",
          },
          effect: {
            en: "The Defending Pokemon is now Burned.",
            ja: "防御ポケモンは現在燃やされています。",
            fr: "Le Pokémon en défense est maintenant brûlé.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "El Pokémon defensor ahora está quemado.",
            it: "Il Pokemon in carica viene ora bruciato.",
            pt: "O Pokémon atual agora está queimado.",
          },
          damage: 10,
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
