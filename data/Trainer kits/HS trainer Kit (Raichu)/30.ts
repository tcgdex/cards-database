import { Card } from '../../../interfaces'
import Set from '../HS trainer Kit (Raichu)'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	dexId: [26],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de fer",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: "30×",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
			},
			effect: {
				en: "Discard all Energy attached to Raichu.",
				fr: "Défaussez toutes les cartes Énergie attachées à Raichu.",
			},
			damage: 100,
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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279118,
				tcgplayer: 88521,
			},
		},
	],

}

export default card
