import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Seaking",
         ja: "航海",
         fr: "Coulant",
         de: "Seckung",
         es: "Pasta",
         it: "Seaking",
         pt: "Seaking",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Rising Lunge",
            ja: "上昇する突進",
            fr: "Fente croissante",
            de: "Steigender Longe",
            es: "Estocada",
            it: "Affondo in aumento",
            pt: "Rising Bunge",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más. Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più. Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos. Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Horn Swipe",
            ja: "ホーンスワイプ",
            fr: "Coup de corne",
            de: "Hornwisch",
            es: "Tornillo",
            it: "Swipe del corno",
            pt: "Deslizamento da buzina",
          },
          effect: {
            en: "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both of them are tails, this attack does 20 damage.",
            ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は20ダメージに加えて40ダメージを与えます。それらの1または両方が尾の場合、この攻撃は20のダメージを与えます。",
            fr: "Flip 2 pièces. Si les deux sont des têtes, cette attaque fait 20 dégâts plus 40 dégâts supplémentaires. Si 1 ou les deux sont des queues, cette attaque fait 20 dégâts.",
            de: "2 Münzen umdrehen. Wenn beide Köpfe sind, verursacht dieser Angriff 20 Schäden plus 40 weitere Schäden. Wenn 1 oder beide Schwänze sind, verursacht dieser Angriff 20 Schaden.",
            es: "Flip 2 monedas. Si ambos son cabezas, este ataque hace 20 daños más 40 daños más. Si 1 o ambas son colas, este ataque hace 20 daños.",
            it: "Flip 2 monete. Se entrambi sono teste, questo attacco infligge 20 danni più 40 danni in più. Se 1 o entrambi sono code, questo attacco fa 20 danni.",
            pt: "Flip 2 moedas. Se ambos são cabeças, esse ataque causará 20 danos mais 40 mais danos. Se 1 ou ambos são caudas, esse ataque causará 20 danos.",
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
