import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos - 049/087",
         ja: "Ampharos -049/087",
         fr: "Ampharos - 049/087",
         de: "Ampharos - 049/087",
         es: "Ámpharos - 049/087",
         it: "Ampharos - 049/087",
         pt: "Ampharos - 049/087",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Thundershock",
            ja: "サンダーショック",
            fr: "Thundershock",
            de: "Donnerschock",
            es: "Tortuga",
            it: "Thundershock",
            pt: "Thundershock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Reflect Energy",
            ja: "エネルギーを反映します",
            fr: "Refléter l'énergie",
            de: "Energie widerspiegeln",
            es: "Reflejar la energía",
            it: "Riflettere l'energia",
            pt: "Refletir energia",
          },
          effect: {
            en: "If you have any Benched Pokemon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokemon.",
            ja: "ベンチ付きポケモンがあり、Ampharosに基本的なエネルギーカードが付いている場合は、それらのエネルギーカードの1つを取り、ポケモンの1つに取り付けます。",
            fr: "Si vous avez des Pokémon bancés et qu'il y a des cartes d'énergie de base attachées aux Ampharos, prenez 1 de ces cartes d'énergie et attachez-la à 1 de ces Pokémon.",
            de: "Wenn Sie ein Bank -Pokémon haben und an Ampharos grundlegende Energiekarten befinden, nehmen Sie 1 dieser Energiekarten an und befestigen Sie es an 1 dieser Pokemon.",
            es: "Si tiene algún Pokémon de banca y si hay alguna tarjeta de energía básica unidas a Ampharos, tome 1 de esas tarjetas de energía y adjunte a 1 de esos Pokémon.",
            it: "Se hai dei Pokemon in panchina e se ci sono carte di energia di base collegate agli Ampharos, prendi 1 di quelle carte energetiche e attaccalo a 1 di quei Pokemon.",
            pt: "Se você tiver algum Pokémon em banco e se houver algum cartão de energia básico anexado aos ânpharos, pegue 1 desses cartões de energia e onence -o a 1 desses Pokémon.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
