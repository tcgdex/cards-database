import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Singe",
				fr: "Roussir",
				de: "Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verbrannt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		fr: "Son dos bosse renferme une lave bouillonnante. Elle refroidit par temps de pluie, ce qui le ralentit."
	},

	thirdParty: {
		cardmarket: 278259,
		tcgplayer: 87814
	}
}

export default card
