import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti",
		de: "Zubat"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
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
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spray",
				fr: "Jet-venin",
				de: "Poison Spray"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			}

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Quand il vole, il émet des ondes ultrasoniques pour déterminer ce qui l'entoure."
	},

	thirdParty: {
		cardmarket: 274645
	}
}

export default card
