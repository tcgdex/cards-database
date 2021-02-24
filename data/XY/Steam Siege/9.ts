import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		273,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bide",
				fr: "Patience",
			},
			effect: {
				en: "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lancez une pièce. Si c’est face, et si ce Pokémon doit être mis K.O. par les dégâts d’une attaque pendant le prochain tour de votre adversaire, il n’est pas mis K.O. mais il ne lui reste que 10 PV.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
