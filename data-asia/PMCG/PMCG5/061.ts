import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Lickitung",
         ja: "ブロックのリキトゥン",
         fr: "Lickitung de Brock",
         de: "Brocks Lickitung",
         es: "Brock's Lickitung",
         it: "Brock's Lickitung",
         pt: "Brock's Lickitung",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [108],
      hp: 80,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tongue Slap",
            ja: "舌の平手打ち",
            fr: "Gifle",
            de: "Zungenschläge",
            es: "Bofetada de la lengua",
            it: "Slap della lingua",
            pt: "Tapa na língua",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slam",
            ja: "スラム",
            fr: "Claquer",
            de: "Zuschlagen",
            es: "Golpe",
            it: "Sbattere",
            pt: "Slam",
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

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
