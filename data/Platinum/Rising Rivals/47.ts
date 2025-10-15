import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Rapidash 4",
		fr: "Galopa  Niv. 53",
		de: "Gallopa 4"
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
				de: "Energie aufsammeln"
			},
			effect: {
				en: "Flip 3 coins. For each heads, search your discard pile for a basic Energy card, show it to your opponent, and put it into your hand.",
				fr: "Lancez 3 pièces. Pour chaque face, choisissez dans votre pile de défausse une carte Énergie de base, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Wirf 3 Münzen. Durchsuche pro \"Kopf\" deinen Ablagestapel nach 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de feu",
				de: "Flammenmähne"
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

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
