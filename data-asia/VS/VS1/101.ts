import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lance's Ampharos",
         ja: "ランスのアンファロス",
         fr: "Ampharos de Lance",
         de: "Lances Ampharos",
         es: "Ámpharos de Lance",
         it: "Lance's Ampharos",
         pt: "Ampharos de Lance",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [181],
      hp: 80,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Removal Beam",
            ja: "除去ビーム",
            fr: "Faisceau de retrait",
            de: "Entfernungsstrahl",
            es: "Haz de eliminación",
            it: "Raggio di rimozione",
            pt: "Feixe de remoção",
          },
          effect: {
            en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられた1つのエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez la carte d'énergie 1 attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, entsorgen Sie 1 Energiemoniemoni, die an das verteidigende Pokémon angebracht sind.",
            es: "Voltea una moneda. Si se dirige, deseche 1 tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare 1 carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte 1 cartão de energia conectado ao Pokémon defensor.",
          },
          damage: 20,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
