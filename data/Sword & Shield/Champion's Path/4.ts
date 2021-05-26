import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort"
	},



	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
			},
			damage: 80,

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
