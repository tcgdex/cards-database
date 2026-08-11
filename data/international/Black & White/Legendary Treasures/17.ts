import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Charmander",
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Draw In",
			},
			effect: {
				en: "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
	},

	thirdParty: {
		cardmarket: 281168,
		tcgplayer: 84219
	}
}

export default card
