import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Charmander",
		fr: "Salamèche",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Playful",
				fr: "Garnement",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288512
	}
}

export default card
