import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Venusaur V",
		fr: "Florizarre V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pollen Bomb",
				fr: "Bombe Pollen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné."
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Typhoon",
				fr: "Typhon Solaire"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Solar Typhoon.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Typhon Solaire."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
