import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Spinda",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dish Out",
			},
			effect: {
				en: "Draw a card from the top and the bottom of your deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Punch",
			},
			effect: {
				en: "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		en: "No two SPINDA have the same pattern of spots. Its tottering step fouls the aim of foes."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278049
	}
}

export default card
