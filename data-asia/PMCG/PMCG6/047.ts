import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Kadabra",
         ja: "サブリナのカダブラ",
         fr: "Kadabra de Sabrina",
         de: "Sabrinas Kadabra",
         es: "Kadabra de Sabrina",
         it: "Kadabra di Sabrina",
         pt: "Kadabra de Sabrina",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [64],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Life Drain",
            ja: "生命排水",
            fr: "Vidage",
            de: "Lebensabfluss",
            es: "Drenaje de la vida",
            it: "Scarico della vita",
            pt: "Dreno da vida",
          },
          effect: {
            en: "Flip a coin. If heads, put a number of damage counters on the Defending Pokemon so that its remaining HP are 10.",
            ja: "コインをひっくり返します。頭の場合、残りのHPが10になるように、防御ポケモンに多くのダメージカウンターを入れます。",
            fr: "Retourner une pièce. Si les têtes, mettez un certain nombre de compteurs de dégâts sur le Pokémon en défense afin que ses HP restants soient 10.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, legen Sie eine Reihe von Schadenszähler auf das verteidigende Pokémon, damit die verbleibenden HP 10 sind.",
            es: "Voltea una moneda. Si se dirige, coloque una serie de contadores de daño en el Pokémon defensor para que su HP restante sea 10.",
            it: "Capovolgi una moneta. Se le teste, metti una serie di contatori di danno sul Pokemon in difesa in modo che i suoi HP rimanenti siano 10.",
            pt: "Vire uma moeda. Se as cabeças, coloque vários contadores de danos no Pokémon atual, para que o HP restante seja 10.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Psyshot",
            ja: "PSYSHOT",
            fr: "Psychot",
            de: "Psyshot",
            es: "Psíquico",
            it: "Psyshot",
            pt: "Psyshot",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
