import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Shuppet",
         ja: "シュペット",
         fr: "Brouiller",
         de: "Shuppet",
         es: "Shuppet",
         it: "Shuppet",
         pt: "Shuppet",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [353],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hypnosis",
            ja: "催眠",
            fr: "Hypnose",
            de: "Hypnose",
            es: "Hipnosis",
            it: "Ipnosi",
            pt: "Hipnose",
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
          cost: ["Psychic"],
          name: {
            en: "Night Attack",
            ja: "夜攻撃",
            fr: "Attaque nocturne",
            de: "Nachtangriff",
            es: "Ataque nocturno",
            it: "Attacco notturno",
            pt: "Ataque noturno",
          },
          effect: {
            en: "Put 1 damage counter on 1 of your opponent's Pokemon.",
            ja: "相手のポケモンの1つに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur le pokemon de votre adversaire.",
            de: "Legen Sie 1 Schadenschalter auf 1 des Pokémon Ihres Gegners.",
            es: "Pon 1 mostrador de daño en 1 de los Pokémon de tu oponente.",
            it: "Metti 1 contatore di danni su 1 del Pokemon del tuo avversario.",
            pt: "Coloque 1 contador de danos em 1 do Pokémon do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
