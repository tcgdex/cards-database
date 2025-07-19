import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp",
         ja: "マチャンプ",
         fr: "Machamp",
         de: "Machamp",
         es: "Machamp",
         it: "Machamp",
         pt: "Machamp",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Derail",
            ja: "脱線",
            fr: "Dérailler",
            de: "Entgleisen",
            es: "Hacer descarrilar",
            it: "Deragliare",
            pt: "Descarrilhar",
          },
          effect: {
            en: "Discard a Special Energy card, if any, attached to the Defending Pokemon.",
            ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie spéciale, le cas échéant, attaché au Pokémon en défense.",
            de: "Verwerfen Sie eine spezielle Energiekarte, falls vorhanden, an das verteidigende Pokémon angeschlossen.",
            es: "Deseche una tarjeta de energía especial, si la hay, unida al Pokémon defensor.",
            it: "Scartare una scheda energetica speciale, se presente, collegata al Pokemon in difesa.",
            pt: "Descarte um cartão de energia especial, se houver, anexado ao Pokémon atual.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Swift Blow",
            ja: "迅速な打撃",
            fr: "Coup rapide",
            de: "Schneller Schlag",
            es: "Golpe rápido",
            it: "BUOVO SWIFT",
            pt: "Golpe rápido",
          },
          effect: {
            en: "Does 60 damage plus 20 more damage for each React Energy card attached to Machamp.",
            ja: "60のダメージに加えて、MachAmpに取り付けられたReact Energyカードごとに20のダメージがさらに20件あります。",
            fr: "Fait 60 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie React attachée à Machamp.",
            de: "Fügt 60 Schäden plus 20 weitere Schäden für jede an Machamp befestigte React -Energiekarte.",
            es: "Hace 60 daños más 20 más de daño por cada tarjeta de energía React unida a Machamp.",
            it: "Fa 60 danni più 20 danni in più per ciascuna carta di energia di reazione collegata a Machamp.",
            pt: "60 danos mais 20 mais danos para cada cartão de energia do React anexado ao Machamp.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
