import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Grumpig",
         ja: "Grumpig",
         fr: "Grincheux",
         de: "Grumpig",
         es: "Grumpig",
         it: "Grumpig",
         pt: "Grumpig",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [326],
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
            en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokemon.",
            ja: "20ダメージに加えて、防御ポケモンに付着した各エネルギーに対してさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée au Pokémon en défense.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energie.",
            es: "Hace 20 daños más 10 daños más por cada energía unida a los Pokémon defensores.",
            it: "Fa 20 danni più 10 danni in più per ogni energia attaccata al Pokemon in difesa.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia ligada ao pokemon defensor.",
          },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Mind Trip",
            ja: "マインドトリップ",
            fr: "Voyage à la mentalité",
            de: "Gedankenreise",
            es: "Viaje mental",
            it: "Viaggio mentale",
            pt: "Viagem mental",
          },
          effect: {
            en: "If Grumpig and the Defending Pokemon have the same amount of Energy attached to them, the Defending Pokemon is now Confused.",
            ja: "Grumpigと防御ポケモンがそれらに同じ量のエネルギーを持っている場合、防御ポケモンは混乱しています。",
            fr: "Si Grumpig et le Pokémon en défense ont la même quantité d'énergie qui leur est attachée, le Pokémon en défense est désormais confus.",
            de: "Wenn Grumpig und das verteidigende Pokémon die gleiche Menge an Energie haben, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si Grumpig y el Pokémon defensor tienen la misma cantidad de energía unida a ellos, el Pokémon defensor ahora está confundido.",
            it: "Se Grumpig e i Pokemon in carica hanno la stessa quantità di energia collegata ad essi, il Pokemon in difesa è ora confuso.",
            pt: "Se Grumpig e o Pokémon defensivo tiverem a mesma quantidade de energia ligada a eles, o Pokemon defensor agora está confuso.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
