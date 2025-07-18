import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bugsy's Ledian",
         ja: "BugsyのLedian",
         fr: "Ledian de Bugsy",
         de: "Bugsy's Ledian",
         es: "Ledian de Bugsy",
         it: "BUGSY's LEDIAN",
         pt: "Bugsy's ledian",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [166],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Comet Punch",
            ja: "彗星パンチ",
            fr: "Punch de comète",
            de: "Komet Punch",
            es: "Cometa",
            it: "Punch di comete",
            pt: "Cometa Punch",
          },
          effect: {
            en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
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
