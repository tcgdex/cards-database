import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Beckon",
				fr: "Invite",
			},
			effect: {
				en: "Put a Supporter card from your discard pile into your hand.",
				fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Turn",
				fr: "Vif Retournement",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
