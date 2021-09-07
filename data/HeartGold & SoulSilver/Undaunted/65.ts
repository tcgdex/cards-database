import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insecateur",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
			},
			effect: {
				en: "During your next turn, Scyther can’t use Slashing Strike.",
				fr: "Insécateur ne peut pas utiliser son Coup déchirant pendant votre prochain tour.",
			},
			damage: 50,

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
