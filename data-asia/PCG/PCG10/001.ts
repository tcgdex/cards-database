import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Seedot",
         ja: "種子",
         fr: "Graine",
         de: "Seedot",
         es: "Seedot",
         it: "Seedot",
         pt: "Seedot",
      },


      category: "Pokemon",
      dexId: [273],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nap",
            ja: "昼寝",
            fr: "Somme",
            de: "Nickerchen",
            es: "Siesta",
            it: "Pisolino",
            pt: "Sesta",
          },
          effect: {
            en: "Remove 2 damage counters from Seedot.",
            ja: "Seedotから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts de Seedot.",
            de: "Entfernen Sie 2 Schadenszähler aus dem Seedot.",
            es: "Retire 2 contadores de daño de Seedot.",
            it: "Rimuovere 2 contatori di danno da Seedot.",
            pt: "Remova 2 contadores de danos do Seedot.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Double Spin",
            ja: "ダブルスピン",
            fr: "Roter",
            de: "Doppelspin",
            es: "Doble giro",
            it: "Doppio giro",
            pt: "Giro duplo",
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
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
