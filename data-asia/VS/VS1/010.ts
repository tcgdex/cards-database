import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bugsy's Pinsir",
         ja: "Bugsy's Pinsir",
         fr: "Bugsy's Pinir",
         de: "Bugsys Pinsir",
         es: "Pinsir de Bugsy",
         it: "Pinsir di Bugsy",
         pt: "Pinsir de Bugsy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [127],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Vise Grip",
            ja: "Vise Grip",
            fr: "Poignée vise",
            de: "Griff",
            es: "Paseos",
            it: "Grip di viti",
            pt: "Grip de torno",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Double Stab",
            ja: "二重吸い込み",
            fr: "Coup de couteau",
            de: "Doppelstab",
            es: "Apuñalamiento doble",
            it: "Doppia pugnalata",
            pt: "Facada dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
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
