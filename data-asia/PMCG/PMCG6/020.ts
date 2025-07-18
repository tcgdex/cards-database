import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidoqueen",
         ja: "ジョバンニのニドキーン",
         fr: "Nidocheen de Giovanni",
         de: "Giovannis Nidoqueen",
         es: "Nidoqueen de Giovanni",
         it: "Giovanni's Nidoqueen",
         pt: "NidoQueen de Giovanni",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Mega Kick",
            ja: "メガキック",
            fr: "Méga coup de pied",
            de: "Mega -Kick",
            es: "Mega patada",
            it: "Mega calcio",
            pt: "Mega chute",
          },
          damage: 40,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Love Lariat",
            ja: "ラリアットが大好きです",
            fr: "Love Lariat",
            de: "LIEBE LARIAT",
            es: "Amor Lariat",
            it: "AMA LARIAT",
            pt: "Amor lariat",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 50 damage plus 50 more damage if you have at least 1 Giovanni's Nidoking on your Bench. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は50のダメージと、少なくとも1つのジョバンニがベンチにいっぱいになっている場合、さらに50のダメージを与えます。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 50 dégâts plus 50 dégâts de plus si vous avez au moins 1 nidoking de Giovanni sur votre banc. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, verursacht dieser Angriff 50 Schäden plus 50 weitere Schäden, wenn Sie mindestens 1 Giovannis Nidoking auf Ihrer Bank haben. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 50 daños más 50 daños más si tiene al menos 1 Giovanni en su banco. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 50 danni più 50 danni in più se hai almeno 1 Giovanni's Nidoking sulla panchina. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 50 danos mais 50 danos se você tiver pelo menos 1 nome de Giovanni no seu banco. Se caudas, esse ataque não faz nada.",
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
