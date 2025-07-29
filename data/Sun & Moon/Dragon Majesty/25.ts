import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		194,
	],

	hp: 70,

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
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
			},

			damage: 20,

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
		cardmarket: 363497
	}
}

export default card
