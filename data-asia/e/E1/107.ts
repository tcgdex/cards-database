import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Magby - 107/128",
         ja: "Magby -107/128",
         fr: "Magby - 107/128",
         de: "Magby - 107/128",
         es: "Magby - 107/128",
         it: "Magby - 107/128",
         pt: "Magby - 107/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [240],
      hp: 30,
      types: ["Fire"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Energy Catch",
            ja: "エネルギーキャッチ",
            fr: "Capture d'énergie",
            de: "Energieverschluss",
            es: "Captura de energía",
            it: "Cattura di energia",
            pt: "Captura de energia",
          },
          effect: {
            en: "Flip a coin. If heads, put a basic Energy card from your discard pile into your hand.",
            ja: "コインをひっくり返します。頭の場合は、捨てられた山から基本的なエネルギーカードを手に入れてください。",
            fr: "Retourner une pièce. Si les têtes, mettez une carte d'énergie de base de votre tas de défausse dans votre main.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, geben Sie eine einfache Energiekarte aus Ihrem Ablagungsstapel in Ihre Hand.",
            es: "Voltea una moneda. Si se dirige, coloque una tarjeta de energía básica de su pila de descarte en su mano.",
            it: "Capovolgi una moneta. Se la testa, metti in mano una scheda di energia di base dalla tua pila di scarto.",
            pt: "Vire uma moeda. Se as cabeças, coloque um cartão de energia básico da sua pilha de descarte em sua mão.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
