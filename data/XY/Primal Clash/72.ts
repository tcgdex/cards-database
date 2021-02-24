import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},
	illustrator: "match",
	rarity: "Rare",
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
				en: "Dancing Tentacles",
				fr: "Tentacules Dansantes",
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
			],
			name: {
				en: "Stick and Absorb",
				fr: "Colle et Absorbe",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Soignez 30 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
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

	retreat: 3,



}

export default card
