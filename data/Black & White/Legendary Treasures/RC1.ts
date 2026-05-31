import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Snivy",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth",
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to this Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.",
	},

	thirdParty: {
		cardmarket: 281150
	}
}

export default card
