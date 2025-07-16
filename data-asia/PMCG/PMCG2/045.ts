import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Wigglytuff",
         ja: "ウィグリティフ",
         fr: "Wigglytuff",
         de: "Wigglytuff",
         es: "Wigglytuff",
         it: "Wigglytuff",
         pt: "Wigglytuff",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [40],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
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
          damage: None,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Do the Wave",
            ja: "波をします",
            fr: "Faire la vague",
            de: "Mach die Welle",
            es: "Hacer la ola",
            it: "Fare l'onda",
            pt: "Faça a onda",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each of your Benched Pokemon.",
            ja: "ベンチ付きポケモンごとに10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chacun de votre pokemon bancé.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jedes Ihrer Bankpokémon.",
            es: "Hace 10 daños más 10 daños más para cada uno de sus Pokémon de banca.",
            it: "Fa 10 danni più 10 danni in più per ciascuno dei pokemon in panchina.",
            pt: "10 danos mais 10 mais danos para cada um dos seus Pokémon em banco.",
          },
          damage: None,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
