import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cranidos",
		fr: "Kranidos",
		de: "Koknodon"
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
		"Fighting",
	],
	evolveFrom: {
		en: "Skull Fossil",
		fr: "Fossile crâne",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc",
				de: "Rock Smash"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
				de: "Knock Over"
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				de: "You may discard any Stadium card in play."
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
