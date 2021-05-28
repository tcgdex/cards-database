import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Enzyme",
				fr: "Enzyme Empoisonnée",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Poisoned Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Empoisonnés de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
