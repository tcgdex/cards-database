import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cranidos",
		fr: "Kranidos",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		408,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Skull Fossil",
		fr: "Fossile crâne",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
