import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Lombre",
         ja: "ロンベル",
         fr: "Lombre",
         de: "Lombre",
         es: "Lombro",
         it: "Lombre",
         pt: "Lombre",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [271],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Rain Dish",
            ja: "雨皿",
            fr: "Plat de pluie",
            de: "Regenschale",
            es: "Plato de lluvia",
            it: "Piatto di pioggia",
            pt: "Prato de chuva",
          },
          effect: {
            en: "At any time between turns, remove 1 damage counter from Lombre.",
            ja: "ターンの間にいつでも、Lombreから1つのダメージカウンターを取り外します。",
            fr: "À tout moment entre les virages, retirez 1 compteur de dégâts de Lombre.",
            de: "Entfernen Sie jederzeit zwischen den Kurven 1 Schadenschalter aus Lombre.",
            es: "En cualquier momento entre turnos, retire 1 contador de daño de Lombre.",
            it: "In qualsiasi momento tra i turni, rimuovere 1 contatore di danni da Lombre.",
            pt: "A qualquer momento entre as voltas, remova 1 contador de danos da Lombre.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
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
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
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
