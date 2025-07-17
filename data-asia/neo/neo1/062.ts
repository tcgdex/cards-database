import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Stantler",
         ja: "スタントラー",
         fr: "Stingler",
         de: "Stantler",
         es: "Stantler",
         it: "Stantler",
         pt: "Stantler",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [234],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mystifying Horns",
            ja: "神秘的な角",
            fr: "Mystification des cornes",
            de: "Hörner mystifizieren",
            es: "Cuernos desconcertantes",
            it: "Mistificanti corna",
            pt: "Horns misteriosos",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
