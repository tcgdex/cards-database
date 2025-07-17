import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Staryu",
         ja: "ミスティのstaryu",
         fr: "Staryu de Misty",
         de: "Mistys Staryu",
         es: "Staryu de Misty",
         it: "Misty's Staryu",
         pt: "Misty's Staryu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Star Boomerang",
            ja: "スターブーメラン",
            fr: "Star Boomerang",
            de: "Star Boomerang",
            es: "Star Boomerang",
            it: "Star Boomerang",
            pt: "Star Boomerang",
          },
          effect: {
            en: "Flip a coin. If heads, return Misty's Staryu and all cards attached to it to your hand. (Either way, this attack does its damage.)",
            ja: "コインをひっくり返します。頭の場合は、MistyのStaryuとすべてのカードを手に返します。 （いずれにしても、この攻撃はその損傷をもたらします。）",
            fr: "Retourner une pièce. Si les têtes, retournez Staryu de Misty et toutes les cartes qui y sont attachées à votre main. (De toute façon, cette attaque fait ses dégâts.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe kehren, geben Sie Mistys Staryu und alle an Ihrer Hand angeschlossenen Karten zurück. (In jedem Fall schädigt dieser Angriff seinen Schaden.)",
            es: "Voltea una moneda. Si se dirige, devuelva a Misty's Staryu y todas las tarjetas adjuntas a su mano. (De cualquier manera, este ataque hace su daño).",
            it: "Capovolgi una moneta. Se la testa, restituisce lo staryu di Misty e tutte le carte attaccate alla tua mano. (Ad ogni modo, questo attacco fa il suo danno.)",
            pt: "Vire uma moeda. Se as cabeças, retornem o Staryu de Misty e todas as cartas anexadas à sua mão. (De qualquer maneira, esse ataque causa seu dano.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
