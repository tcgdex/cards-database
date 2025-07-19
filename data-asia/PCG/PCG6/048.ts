import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Kirlia",
         ja: "キルリア",
         fr: "Kirlia",
         de: "Kliria",
         es: "Kirlia",
         it: "Kirlia",
         pt: "Kirlia",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [281],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Calm Mind",
            ja: "落ち着いた心",
            fr: "Esprit calme",
            de: "Ruhiger Verstand",
            es: "Mente tranquila",
            it: "Mente calma",
            pt: "Mente calma",
          },
          effect: {
            en: "Remove 3 damage counters from Kirlia.",
            ja: "Kirliaから3つのダメージカウンターを削除します。",
            fr: "Retirez 3 compteurs de dégâts de Kirlia.",
            de: "Entfernen Sie 3 Schadenszähler von Kirlia.",
            es: "Retire 3 contadores de daño de Kirlia.",
            it: "Rimuovere 3 contatori di danno da Kirlia.",
            pt: "Remova 3 contadores de danos de Kirlia.",
          },
        },
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
            en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokemon.",
            ja: "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Hace 20 daños más 10 daños más por cada energía unida a los Pokémon defensores.",
            it: "Fa 20 danni più 10 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia ligada ao pokemon defensor.",
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
