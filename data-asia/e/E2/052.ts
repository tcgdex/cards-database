import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonchan",
         ja: "ヒットモンチャン",
         fr: "Hitmonchan",
         de: "Hitmonchan",
         es: "Hitmonchan",
         it: "Hitmonchan",
         pt: "Hitmnchan",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [107],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rush",
            ja: "急ぐ",
            fr: "Se précipiter",
            de: "Eilen",
            es: "Correr",
            it: "Fretta",
            pt: "Correr",
          },
          effect: {
            en: "Flip 5 coins. This attack does 10 damage times the number of heads. Hitmonchan can't attack during your next turn.",
            ja: "5枚のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。 Hitmonchanは次のターン中に攻撃できません。",
            fr: "Flip 5 pièces. Cette attaque fait 10 dégâts le nombre de têtes. Hitmonchan ne peut pas attaquer pendant votre prochain tour.",
            de: "5 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe. Hitmonchan kann in Ihrer nächsten Runde nicht angreifen.",
            es: "Flip 5 monedas. Este ataque hace 10 veces el número de cabezas. Hitmonchan no puede atacar durante tu próximo turno.",
            it: "Flip 5 monete. Questo attacco fa 10 danni volte il numero di teste. Hitmonchan non può attaccare durante il tuo prossimo turno.",
            pt: "Vire 5 moedas. Este ataque causa 10 danos ao número do número de cabeças. Hitmnchan não pode atacar durante o seu próximo turno.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Smash Punch",
            ja: "スマッシュパンチ",
            fr: "Smash punch",
            de: "Smash Punch",
            es: "Punch Smash",
            it: "Smash Punch",
            pt: "Smash Punch",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
