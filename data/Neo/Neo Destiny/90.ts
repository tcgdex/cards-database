import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		de: "Bluzuk"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Rogne",
				de: "Gnaw"
			},

			damage: 10,

		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Poison Barb"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il possède une sorte de radar qu'il utilise pour trouver les insectes qu'il mange, même dans l'obscurité la plus totale."
	}
}

export default card
