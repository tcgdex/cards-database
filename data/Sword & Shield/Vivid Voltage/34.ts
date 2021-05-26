import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dewott",
		fr: "Mateloutre"
	},
	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon"
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wash",
				fr: "Aqua-Lavage"
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
