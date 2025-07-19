import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Chinchou",
         ja: "チンチョウ",
         fr: "Chinchou",
         de: "Chinchou",
         es: "Chinchou",
         it: "Chinchou",
         pt: "Chinchou",
      },


      category: "Pokemon",
      dexId: [170],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Positive Ion",
            ja: "正のイオン",
            fr: "Ion positif",
            de: "Positives Ion",
            es: "Ion positivo",
            it: "Ione positivo",
            pt: "Íon positivo",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Negative Ion",
            ja: "負のイオン",
            fr: "Ion négatif",
            de: "Negatives Ion",
            es: "Ion negativo",
            it: "Ione negativo",
            pt: "Íon negativo",
          },
          effect: {
            en: "During your opponent's next turn, any damage done by attacks from the Defending Pokemon is reduced by 10 (before applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、防御ポケモンからの攻撃による損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé par les attaques du Pokémon défendant est réduit de 10 (avant d'appliquer la faiblesse et la résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden durch Angriffe des verteidigenden Pokémon um 10 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho por los ataques del Pokémon defensor se reduce en 10 (antes de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno causato dagli attacchi del Pokemon in carica viene ridotto di 10 (prima di applicare debolezza e resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado por ataques do pokemon atual é reduzido em 10 (antes de aplicar fraqueza e resistência).",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
