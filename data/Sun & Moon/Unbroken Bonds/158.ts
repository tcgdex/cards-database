import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},
	illustrator: "kanahei",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 150,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lazy Eating",
				fr: "Repas Paresseux",
			},
			effect: {
				en: "Between turns, heal 10 damage from this Pokémon.",
				fr: "Entre chaque tour, soignez 10 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Counter",
				fr: "Forte Réplique",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a TAG TEAM, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est une ESCOUADE, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
