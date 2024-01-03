import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Ekans",
		fr: "Abo",
		de: "Rettan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 50,

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
				"Grass",
			],

			name: {
				en: "Poison Sting",
				fr: "Dard-venin",
				de: "Poison Sting"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Un carnivore qui avale ses proies en entier. Roucool et Piafabec sont ses plats favoris."
	}
}

export default card
