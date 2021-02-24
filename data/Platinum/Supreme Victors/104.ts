import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		349,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Surprise Attack",
				fr: "Attaque surprise",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Count and Draw",
				fr: "Compter et piocher",
			},
			effect: {
				en: "Draw a card for each of your opponent's Pokémon that isn't an Evolved Pokémon.",
				fr: "Piochez une carte pour chaque Pokémon de votre adversaire qui n'est pas un Pokémon Évolué.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
