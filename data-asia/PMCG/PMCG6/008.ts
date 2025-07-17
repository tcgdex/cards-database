import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Koffing (C)",
         ja: "コガのコフィン（c）",
         fr: "Koga's Koffing (C)",
         de: "Kogas Koffing (C)",
         es: "Koga's Koffing (C)",
         it: "Koga's Koffing (C)",
         pt: "Koga's Koffing (C)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [109],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Smelly Gas",
            ja: "臭いガス",
            fr: "Gaz malodorant",
            de: "Stinkendes Gas",
            es: "Gas maloliente",
            it: "Gas puzzolente",
            pt: "Gás fedorento",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each Benched Pokemon (including your own). (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は各ベンチポケモン（あなた自身を含む）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chaque Pokémon bancé (y compris le vôtre). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn dieser Angriff auf jedes Bankpokémon (einschließlich Ihrer eigenen) 10 Schaden zufügt. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon en banca (incluido el tuyo). (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni a ciascun Pokemon in panchina (incluso il tuo). (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada Pokémon em banco (incluindo o seu). (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 10,
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
