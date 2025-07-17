import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Jynx",
         ja: "ジンクス",
         fr: "Jynx",
         de: "Jynx",
         es: "Jindo",
         it: "Jynx",
         pt: "Jynx",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [124],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "This attack does 10 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "この攻撃は、ディフェンディングポケモンの各ダメージカウンターに対して10ダメージに加えて10ダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter am verteidigenden Pokémon.",
            es: "Este ataque hace 10 daños más 10 10 más de daño por cada contador de daño en el Pokémon defensor.",
            it: "Questo attacco infligge 10 danni più 10 danni per ogni danno sul Pokemon in difesa.",
            pt: "Este ataque causa 10 danos mais 10 mais danos para cada contador de danos no Pokémon atual.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
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
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
