import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Jigglypuff",
         ja: "jigglypuff",
         fr: "Jigglypuff",
         de: "Wacklypuff",
         es: "Jigglypuff",
         it: "Jigglypuff",
         pt: "Jigglypuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [39],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nap",
            ja: "昼寝",
            fr: "Somme",
            de: "Nickerchen",
            es: "Siesta",
            it: "Pisolino",
            pt: "Sesta",
          },
          effect: {
            en: "Remove 1 damage counter from Jigglypuff.",
            ja: "Jigglypuffから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de Jigglypuff.",
            de: "Entfernen Sie 1 Schadenschalter aus Jigglypuff.",
            es: "Retire 1 contador de daño de Jigglypuff.",
            it: "Rimuovere 1 contatore di danni da Jigglypuff.",
            pt: "Remova 1 contador de danos do jigglypuff.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Lullaby",
            ja: "子守lulaby",
            fr: "Berceuse",
            de: "Wiegenlied",
            es: "Canción de cuna",
            it: "Ninna nanna",
            pt: "Canção de ninar",
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
          damage: 10,
        },
      ],

      retreat: 1,

};
