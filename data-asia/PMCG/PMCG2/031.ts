import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Primeape",
         ja: "プライム",
         fr: "Primepape",
         de: "Primape",
         es: "Primapia",
         it: "Prima",
         pt: "Primeape",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [57],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
          damage: None,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Tantrum",
            ja: "かんしゃく",
            fr: "Colère",
            de: "Wutanfall",
            es: "Berrinche",
            it: "Hentro",
            pt: "Birra",
          },
          effect: {
            en: "Flip a coin. If tails, Primeape is now Confused (after doing damage).",
            ja: "コインをひっくり返します。尾の場合、プライムエーパーは（ダメージを与えた後）混乱しています。",
            fr: "Retourner une pièce. Si Tails, Primeape est maintenant confus (après avoir causé des dommages).",
            de: "Eine Münze drehen. Wenn Schwänze, ist Primape jetzt verwirrt (nach Schaden).",
            es: "Voltea una moneda. Si Tails, Primeape ahora está confundido (después de hacer daño).",
            it: "Capovolgi una moneta. Se le code, Primeape è ora confusa (dopo aver fatto danni).",
            pt: "Vire uma moeda. Se caudas, o Primeape agora está confuso (depois de causar danos).",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
