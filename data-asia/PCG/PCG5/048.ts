import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Machoke",
         ja: "マチョーク",
         fr: "Machoke",
         de: "Machoke",
         es: "Machoke",
         it: "Machoke",
         pt: "Machoke",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [67],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Paranoid",
            ja: "妄想",
            fr: "Paranoïaque",
            de: "Paranoid",
            es: "Paranoico",
            it: "Paranoico",
            pt: "Paranóico",
          },
          effect: {
            en: "As long as Machoke is Confused, Machoke's attacks do 50 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "マチョークが混乱している限り、マチョークの攻撃は防御するポカン（脱力感と抵抗を適用する前）に50回以上のダメージを与えます。",
            fr: "Tant que Machoke est confus, les attaques de Machoke font 50 dommages supplémentaires aux Poké en défense (avant d'appliquer la faiblesse et la résistance).",
            de: "Solange Machoke verwirrt ist, verursachen die Angriffe von Machoke 50 weitere Schäden an der verteidigenden Poké Mon (bevor sie Schwäche und Widerstand anwenden).",
            es: "Mientras Machoke esté confundido, los ataques de Machoke hacen 50 daños más al Poké Mon defensor (antes de aplicar debilidad y resistencia).",
            it: "Finché Machoke è confuso, gli attacchi di Machoke fanno altri 50 danni al poké mon (prima di applicare la debolezza e la resistenza).",
            pt: "Enquanto Machoke estiver confuso, os ataques de Machoke causam mais 50 danos ao poké de Machoke (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Split Kick",
            ja: "スプリットキック",
            fr: "Coup de pied divisé",
            de: "Split Kick",
            es: "Patada dividida",
            it: "Calcio diviso",
            pt: "Chute dividido",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon.",
            ja: "防御する各ポケモンに20のダメージを与えます。",
            fr: "Fait 20 dommages à chaque Pokémon en défense.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20.",
            es: "Hace 20 daños a cada Pokémon defensor.",
            it: "Fa 20 danni a ciascun Pokemon in difesa.",
            pt: "Causa 20 danos a cada Pokémon defensor.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Magnum Punch",
            ja: "マグナムパンチ",
            fr: "Punch de magnum",
            de: "Magnum Punch",
            es: "Magnum Punch",
            it: "Magnum Punch",
            pt: "Magnum Punch",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
