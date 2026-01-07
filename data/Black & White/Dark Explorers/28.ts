import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		394,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Wing",
				fr: "Aile Tranchante"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280356,
		tcgplayer: 88372
	}
}

export default card
