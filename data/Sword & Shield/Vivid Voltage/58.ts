import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Shocking Smash",
				fr: "Frappe Choquante"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
