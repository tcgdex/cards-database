import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Combusken",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
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
				en: "Flamethrower",
			},
			effect: {
				en: "Discard a Fire Energy attached to Combusken.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water"
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
		cardmarket: 277455,
		tcgplayer: 84405
	}
}

export default card
