import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Chimecho δ",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wrap",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277466
	}
}

export default card
