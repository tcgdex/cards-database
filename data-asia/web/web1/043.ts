import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Moltres",
         ja: "モルトレス",
         fr: "Moltres",
         de: "Moltres",
         es: "Moltros",
         it: "Moltres",
         pt: "Moltres",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Hyper Flame",
            ja: "ハイパーフレーム",
            fr: "Hyper flamme",
            de: "Hyperflamme",
            es: "Hiper Llama",
            it: "Iper fiamma",
            pt: "Hiper -chama",
          },
          effect: {
            en: "Flip a coin. If heads, discard 1 Fire Energy card attached to Moltres. If tails, discard all Energy cards attached to Moltres. If you can't discard Energy cards, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合は、モルトレスに取り付けられた1つの消防エネルギーカードを捨てます。尾の場合、モルトレスに取り付けられたすべてのエネルギーカードを捨ててください。エネルギーカードを破棄できない場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, jetez 1 carte d'énergie de feu fixée à Moltres. Si Tails, jetez toutes les cartes d'énergie attachées à Moltres. Si vous ne pouvez pas éliminer les cartes d'énergie, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, verwerfen Sie 1 Feuerergiekarte an Moltres. Wenn Schwänze, verwerfen Sie alle an Moltres befestigten Energiekarten. Wenn Sie keine Energiekarten entwerfen können, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, deseche 1 tarjeta de energía de fuego unida a Moltres. Si las colas, desechen todas las tarjetas de energía unidas a Moltres. Si no puedes descartar cartas de energía, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le teste, scartare 1 carta di energia antincendio attaccata a Moltres. Se coda, scartare tutte le carte di energia attaccate ai moltres. Se non riesci a scartare le carte energetiche, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, descarte 1 cartão de energia de incêndio conectado a Moltres. Se as caudas, descarte todos os cartões de energia anexados a Moltres. Se você não pode descartar os cartões de energia, esse ataque não fará nada.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

};
