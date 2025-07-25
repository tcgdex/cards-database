import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Spheal",
         ja: "スフィアル",
         fr: "Sphoal",
         de: "Spheal",
         es: "Esfera",
         it: "Sfeal",
         pt: "Speal",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [363],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
