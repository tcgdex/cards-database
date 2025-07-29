import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Barboach",
		fr: "Barloche",
		es: "Barboach",
		it: "Barboach",
		pt: "Barboach",
		de: "Schmerbe"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		339,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
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

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273570
	}
}

export default card
