import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Granbull",
         ja: "グランブル",
         fr: "Grain",
         de: "Granbull",
         es: "Abuela",
         it: "Granbull",
         pt: "Granbull",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [210],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Fling",
            ja: "逃げる",
            fr: "Jeter",
            de: "Schleudern",
            es: "Arrojar",
            it: "Lancia",
            pt: "Arremesso",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. (Do the damage before switching the Pokemon.)",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. (Faites les dégâts avant de changer le pokemon.)",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. (Führen Sie den Schaden an, bevor Sie das Pokémon wechseln.)",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. (Haz el daño antes de cambiar el Pokémon).",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. (Fai il danno prima di cambiare il Pokemon.)",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. (Faça o dano antes de mudar o Pokemon.)",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 50,
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
