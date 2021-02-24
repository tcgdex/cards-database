import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		fr: "Mewtwo-GX",
	},
	illustrator: "MPC Film",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Psychic",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Lévikinésie",
			},
			effect: {
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Vibration Régnante",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Nova Psy-GX",
			},
			effect: {
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 180,

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
