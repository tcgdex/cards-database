import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Makuhita",
         ja: "マクヒタ",
         fr: "Makuhita",
         de: "Makuhita",
         es: "Makuhita",
         it: "Makuhita",
         pt: "Makuhita",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [296],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Thrust",
            ja: "推力",
            fr: "Poussée",
            de: "Schub",
            es: "Empuje",
            it: "Spinta",
            pt: "Impulso",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. If heads, discard 1 Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、防御ポケモンに取り付けられた1つのエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Si les têtes, jetez la carte d'énergie 1 attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. Wenn Sie Köpfe sind, entsorgen Sie 1 Energiemoniemoni, die an das verteidigende Pokémon angebracht sind.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. Si se dirige, deseche 1 tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Se le teste, scartare 1 carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. Se as cabeças, descarte 1 cartão de energia conectado ao Pokémon defensor.",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
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
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
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
          stamp: ["1st edition"],
        },
      ],
};
