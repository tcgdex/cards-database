import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Metang",
         ja: "メタン",
         fr: "Métang",
         de: "Metang",
         es: "Metang",
         it: "Metang",
         pt: "Metang",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [375],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Psychic Boom",
            ja: "サイキックブーム",
            fr: "Boom psychique",
            de: "Psychischer Boom",
            es: "Boom psíquico",
            it: "Boom psichico",
            pt: "Boom psíquico",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Hace 10 daños más 10 daños más por cada energía unida al Pokémon defensor.",
            it: "Fa 10 danni più 10 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "10 danos mais 10 mais danos para cada energia ligada ao pokemon defensor.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Quick Blow",
            ja: "素早い打撃",
            fr: "Coup rapide",
            de: "Schneller Schlag",
            es: "Golpe rápido",
            it: "BUOGNO QUAST",
            pt: "Golpe rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 40 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 40 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 40 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 2,

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
