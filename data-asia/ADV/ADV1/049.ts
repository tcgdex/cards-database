import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Aron",
         ja: "アロン",
         fr: "Aron",
         de: "Aron",
         es: "Arón",
         it: "Aron",
         pt: "Aron",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [304],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
