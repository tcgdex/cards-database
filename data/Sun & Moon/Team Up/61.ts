import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		73,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Void Tentacles",
				fr: "Tentacules du Néant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paranormal",
				fr: "Paranormal",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Ultra Beasts.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques d’Ultra-Chimères.",
			},
			damage: 70,

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
