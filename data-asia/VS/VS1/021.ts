import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Gengar",
         ja: "モーティのジェンガー",
         fr: "Gengar de Morty",
         de: "Mortys Gengar",
         es: "Gengar de Morty",
         it: "Morty's Gengar",
         pt: "Gengar de Morty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [94],
      hp: 70,
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
            en: "Transfer Pain",
            ja: "痛みを移します",
            fr: "Transférer des douleurs",
            de: "Übertragungsschmerzen",
            es: "Dolor transferido",
            it: "Trasferisci dolore",
            pt: "Transferir dor",
          },
          effect: {
            en: "If Morty's Gengar has any damage counters on it, move 1 damage counter from Morty's Gengar onto the Defending Pokemon.",
            ja: "MortyのGengarにダメージカウンターがある場合は、MortyのGengarから1ダメージカウンターを防御ポケモンに移動します。",
            fr: "Si le Gengar de Morty a des compteurs de dégâts dessus, déplacez 1 compteur de dégâts du Gengar de Morty sur le Pokémon en défense.",
            de: "Wenn Mortys Gengar irgendwelche Schadenszähler hat, bewegen Sie 1 Schadenschalter von Mortys Gengar auf das verteidigende Pokémon.",
            es: "Si el Gengar de Morty tiene algún daño en los contadores, mueva 1 daños en el contador de Morty al Pokémon defensor.",
            it: "Se Gengar di Morty ha qualche contatori di danni su di esso, sposta 1 contatore di danni dal Gengar di Morty sul Pokemon in difesa.",
            pt: "Se o Gengar de Morty tiver algum balcão de dano, mova 1 contador de danos do Gengar de Morty para o Pokémon atual.",
          },
        },
      ],

      retreat: 1,

};
