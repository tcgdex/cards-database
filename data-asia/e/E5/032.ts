import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Swinub - 032/088",
         ja: "Swinub -032/088",
         fr: "Swinub - 032/088",
         de: "Swinub - 032/088",
         es: "Swinub - 032/088",
         it: "Swinub - 032/088",
         pt: "Swinub - 032/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [220],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            en: "Freezing Breath",
            ja: "凍る息",
            fr: "Haleine glaciale",
            de: "Gefrierhauch",
            es: "Respiración congelada",
            it: "Bioringo di congelamento",
            pt: "Respiração congelante",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, o pokemon defensor agora está dormindo.",
          },
        },
      ],

      retreat: 1,

};
