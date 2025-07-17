import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Mewtwo - 086/128",
         ja: "Mewtwo -086/128",
         fr: "Mewtwo - 086/128",
         de: "Mewtwo - 086/128",
         es: "Mewtwo - 086/128",
         it: "Mewtwo - 086/128",
         pt: "Mewtwo - 086/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hypnosis",
            ja: "催眠",
            fr: "Hypnose",
            de: "Hypnose",
            es: "Hipnosis",
            it: "Ipnosi",
            pt: "Hipnose",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psychic",
            ja: "サイキック",
            fr: "Psychique",
            de: "Psychisch",
            es: "Psíquico",
            it: "Psichico",
            pt: "Psíquico",
          },
          effect: {
            en: "This attack does 20 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.",
            ja: "この攻撃は、ディフェンディングポケモンに取り付けられた各エネルギーカードに対して20のダメージと10のダメージをさらに10ダメージします。",
            fr: "Cette attaque fait 20 dégâts plus 10 dégâts supplémentaires pour chaque carte d'énergie attachée au Pokémon en défense.",
            de: "Dieser Angriff verursacht 20 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Este ataque hace 20 daños más 10 daños más por cada carta de energía unida al Pokémon defensor.",
            it: "Questo attacco infligge 20 danni più 10 danni in più per ciascuna carta di energia collegata al Pokemon in carica.",
            pt: "Este ataque causa 20 de dano mais 10 mais danos para cada cartão de energia ligado ao pokemon defensor.",
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
