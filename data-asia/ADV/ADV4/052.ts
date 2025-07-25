import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Rhyhorn",
         ja: "Rhyhorn",
         fr: "Rhyhorn",
         de: "Rhyhorn",
         es: "Ranio",
         it: "Rhyhorn",
         pt: "Rhyhorn",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [111],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Rhyhorn does 10 damage to itself.",
            ja: "Rhyhornはそれ自体に10ダメージを与えます。",
            fr: "Rhyhorn fait 10 dégâts à lui-même.",
            de: "Rhyhorn schädigt sich 10.",
            es: "Rhyhorn hace 10 daños a sí mismo.",
            it: "Rhyhorn fa 10 danni a se stesso.",
            pt: "Rhyhorn causa 10 danos a si mesmo.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
