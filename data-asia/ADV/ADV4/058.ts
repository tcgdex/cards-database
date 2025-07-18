import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Wigglytuff ex",
         ja: "wigglytuff ex",
         fr: "Wigglytuff ex",
         de: "Wigglytuff ex",
         es: "Wigglytuff ex",
         it: "Wigglytuff ex",
         pt: "Wigglytuff Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [40],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sleepy Song",
            ja: "眠そうな歌",
            fr: "Chanson endormie",
            de: "Schläfriges Lied",
            es: "Canción somnolienta",
            it: "Canzone assonnata",
            pt: "Música sonolenta",
          },
          effect: {
            en: "Each Defending Pokemon is now Asleep.",
            ja: "防御するポケモンはそれぞれ眠っています。",
            fr: "Chaque Pokémon défendant est maintenant endormi.",
            de: "Jedes verteidigende Pokemon schläft jetzt.",
            es: "Cada Pokémon defensor ahora está dormido.",
            it: "Ogni Pokemon in difesa ora dorme.",
            pt: "Cada Pokemon defensor agora está dormindo.",
          },
          damage: 30,
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
            en: "Does 30 damage plus 10 more damage for each of your Benched Pokemon.",
            ja: "ベンチ付きポケモンごとに30のダメージに加えて10ダメージを与えます。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chacun de vos pokémon bancés.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jedes Ihrer Bankpokémon.",
            es: "Hace 30 daños más 10 daños más para cada uno de sus Pokémon de banca.",
            it: "Fa 30 danni più 10 danni in più per ciascuno dei pokemon in panchina.",
            pt: "Causam 30 danos mais 10 mais danos para cada um dos seus Pokémon em banco.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
