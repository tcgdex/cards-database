import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Rapidash 4",
		fr: "Galopa  Niv. 53",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		78,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Pickup Power",
				fr: "Pouvoir ramassage",
			},
			effect: {
				en: "Flip 3 coins. For each heads, search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand.",
				fr: "Lancez 3 pièces. Pour chaque face, choisissez dans votre pile de défausse une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de feu",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
