import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		366,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Clamp",
				fr: "Claquoir",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sparkling Pearl",
				fr: "Perle étincelante",
			},

			damage: 20,

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
