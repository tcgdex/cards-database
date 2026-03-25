import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
	},

	illustrator: "tetsuya koizumi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It shelters itself in its shell, then strikes back with spouts of water at every opportunity."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
