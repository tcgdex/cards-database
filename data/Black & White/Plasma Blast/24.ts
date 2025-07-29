import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fossil Hunt",
				fr: "Chasse au Fossile",
			},
			effect: {
				en: "Put 2 Item cards that have Fossil in their names from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Objet qui ont Fossile dans leur nom de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281045
	}
}

export default card
