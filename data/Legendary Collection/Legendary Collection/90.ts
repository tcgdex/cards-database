import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Rhyhorn",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leer",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Rhyhorn during your opponent's next turn. (Benching either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274855,
		tcgplayer: 88738
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
