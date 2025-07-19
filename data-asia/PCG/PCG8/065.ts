import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Lairon",
         ja: "レイロン",
         fr: "Lairon",
         de: "Lairon",
         es: "Guarida",
         it: "Lairon",
         pt: "Lairon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [305],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Roar",
            ja: "ro音",
            fr: "Rugir",
            de: "Brüllen",
            es: "Rugido",
            it: "Ruggito",
            pt: "Rugido",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any.",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver.",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Metal Charge",
            ja: "金属電荷",
            fr: "Charge métallique",
            de: "Metallladung",
            es: "Carga de metal",
            it: "Carica metallica",
            pt: "Carga de metal",
          },
          effect: {
            en: "Put 1 damage counter on Lairon.",
            ja: "ライロンに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur Lairon.",
            de: "Legen Sie 1 Schadenschalter auf Lairon.",
            es: "Pon 1 mostrador de daño en Lairon.",
            it: "Metti 1 contatore di danni su Lairon.",
            pt: "Coloque 1 contador de danos em Lairon.",
          },
          damage: 50,
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
