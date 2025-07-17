import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Cyndaquil",
         ja: "シンダキル",
         fr: "Cyndaquil",
         de: "Cyndaquil",
         es: "Cyndaquil",
         it: "Cyndaquil",
         pt: "Cyndaquil",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [155],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Fireworks",
            ja: "花火",
            fr: "Feux d'artifice",
            de: "Feuerwerk",
            es: "Fuegos artificiales",
            it: "Fuochi d'artificio",
            pt: "Fogos de artifício",
          },
          effect: {
            en: "Flip a coin. If tails, discard 1 Energy card attached to Cyndaquil.",
            ja: "コインをひっくり返します。尾の場合は、Cyndaquilに取り付けられた1つのエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si Tails, jetez 1 carte d'énergie attachée à Cyndaquil.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie 1 Energiemittel, die an Cyndaquil befestigt ist.",
            es: "Voltea una moneda. Si se coloca, deseche 1 tarjeta de energía unida a Cyndaquil.",
            it: "Capovolgi una moneta. Se code, scartare 1 carta di energia collegata a Cyndaquil.",
            pt: "Vire uma moeda. Se as caudas, descarte 1 cartão de energia anexado a Cyndaquil.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos; Se caudas, esse ataque causa 10 danos.",
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
