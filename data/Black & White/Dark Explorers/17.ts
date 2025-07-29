import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
		es: "Blaziken",
		it: "Blaziken",
		pt: "Blaziken",
		de: "Lohgock"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blaze Kick",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, the Defending Pokémon is now Burned.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280345
	}
}

export default card
