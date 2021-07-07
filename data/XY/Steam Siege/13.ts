import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		591,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Crazy Spore",
				fr: "Spore Folle",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Strange Reaction",
				fr: "Étrange Réaction",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, il est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
