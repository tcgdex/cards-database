import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Gas",
				fr: "Gaz Toxik",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutissement",
			},
			effect: {
				en: "If, before doing damage, your opponent’s Active Pokémon has fewer remaining HP than this Pokémon, this attack does 50 more damage.",
				fr: "Si, avant d’infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: "50+",

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
