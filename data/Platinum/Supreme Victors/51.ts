import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		400,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-boulé",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap' keu",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
