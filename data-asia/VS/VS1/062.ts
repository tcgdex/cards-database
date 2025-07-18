import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Arbok",
         ja: "ジャニーンのアーボック",
         fr: "Arbok de Janine",
         de: "Janines Arbok",
         es: "Arbok de Janine",
         it: "Janine's Arbok",
         pt: "Janine's Arbok",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [24],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Wrap",
            ja: "包む",
            fr: "Envelopper",
            de: "Wickeln",
            es: "Envoltura",
            it: "Avvolgere",
            pt: "Enrolar",
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
          damage: 10,
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
