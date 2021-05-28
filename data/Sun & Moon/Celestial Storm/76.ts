import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Méditikka",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		307,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Bide",
				fr: "Patience",
			},
			effect: {
				en: "Flip a coin. If heads, if this Pokémon would be Knocked Out by damage from an attack during your opponent's next turn, it is not Knocked Out, and its remaining HP becomes 10.",
				fr: "Lancez une pièce. Si c’est face, et si ce Pokémon doit être mis K.O. par les dégâts d’une attaque pendant le prochain tour de votre adversaire, il n’est pas mis K.O., mais il n’a plus que 10 PV.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Kick",
				fr: "Koud’Pied",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
