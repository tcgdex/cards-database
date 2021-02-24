import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Woobat",
		fr: "Chovsourir",
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		527,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
				fr: "Flair",
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
