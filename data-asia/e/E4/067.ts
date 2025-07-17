import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Dunsparce",
         ja: "ダンズパース",
         fr: "Dunsparce",
         de: "Schwachsinn",
         es: "Dunsparce",
         it: "Dunsparce",
         pt: "Dunsparce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [206],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Slippery Skin",
            ja: "滑りやすい肌",
            fr: "Peau glissante",
            de: "Rutschige Haut",
            es: "Piel resbaladiza",
            it: "Pelle scivolosa",
            pt: "Pele escorregadia",
          },
          effect: {
            en: "As long as the Defending Pokmon is an Evolved Pokmon, Dunsparce's Retreat Cost is 0.",
            ja: "防御ポケモンが進化したポケモンである限り、Dunsparceのリトリートコストは0です。",
            fr: "Tant que le Pokémon en défense est un Pokémon évolué, le coût de la retraite de Dunsparce est de 0.",
            de: "Solange das verteidigende Pokémon ein weiterentwickeltes Pokémon ist, beträgt der Dunsparce -Rückzugskosten 0.",
            es: "Mientras el Pokémon defensor sea un Pokémon evolucionado, el costo de retirada de Dunsparce es 0.",
            it: "Finché il Pokemon in carica è un Pokemon evoluto, il costo di ritiro di Dunsparce è 0.",
            pt: "Enquanto o Pokémon atual for um Pokemon evoluído, o custo do retiro Dunsparce é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Shake",
            ja: "テールシェイク",
            fr: "Tail Shake",
            de: "Schwanzschütteln",
            es: "Batido",
            it: "Scuoto di coda",
            pt: "Shake de cauda",
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
