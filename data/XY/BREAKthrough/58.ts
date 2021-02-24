import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		92,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison Dodo",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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
