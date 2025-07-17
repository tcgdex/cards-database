import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Kecleon",
         ja: "ケクレオン",
         fr: "Kecleon",
         de: "Kecleon",
         es: "Kecleón",
         it: "Kecleon",
         pt: "Kecleon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [352],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Energy Variation",
            ja: "エネルギーの変動",
            fr: "Variation énergétique",
            de: "Energievariation",
            es: "Variación de energía",
            it: "Variazione di energia",
            pt: "Variação de energia",
          },
          effect: {
            en: "Kecleon's type is the same as every type of basic Energy card attached to Kecleon.",
            ja: "Kecleonのタイプは、Kecleonに取り付けられたあらゆる種類の基本エネルギーカードと同じです。",
            fr: "Le type de Kecleon est le même que chaque type de carte d'énergie de base attachée à Kecleon.",
            de: "Kecleons Typ ist der gleiche wie jede Art von Basiskarte, die an Kecleon angeschlossen ist.",
            es: "El tipo de Kecleon es el mismo que todo tipo de tarjeta de energía básica unida a Kecleon.",
            it: "Il tipo di Kecleon è lo stesso di ogni tipo di carta energetica di base collegata a Kecleon.",
            pt: "O tipo de Kecleon é o mesmo que todo tipo de cartão de energia básico anexado a Kecleon.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
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

};
