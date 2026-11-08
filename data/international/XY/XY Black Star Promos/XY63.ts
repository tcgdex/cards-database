import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Absol EX",
		'fr-fr': "M Absol EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		'en-us': "Absol-EX",
		'fr-fr': "Absol-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Disaster Wing",
				'fr-fr': "Aile du Désastre",
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck. If that card is a Trainer card, this attack does 80 more damage.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Dresseur, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "80＋",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'fr-fr': "Aile du Désastre",
			},
			effect: {
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire. Si c'est une carte Dresseur, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "80＋",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
