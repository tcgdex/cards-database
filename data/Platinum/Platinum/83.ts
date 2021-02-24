import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		200,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Take Back",
				fr: "Reprendre",
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
