import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Sunflora",
         ja: "サンフロラ",
         fr: "Sunflora",
         de: "Sonnenflora",
         es: "Sunflora",
         it: "Sunfra",
         pt: "Sunflora",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [192],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Petal Dance",
            ja: "花びらのダンス",
            fr: "Danse de pétales",
            de: "Blütenstanz",
            es: "Baile de pétalos",
            it: "Danza del petalo",
            pt: "Dança de pétala",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。 Sunfloraは現在混乱しています（ダメージを受けた後）。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes. Sunflora est maintenant confus (après avoir fait des dégâts).",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe. Sunflora ist jetzt verwirrt (nach Schaden).",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas. Sunflora ahora está confundido (después de hacer daño).",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste. Sunflora è ora confusa (dopo aver fatto danni).",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças. A Sunflora está agora confusa (depois de causar danos).",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
