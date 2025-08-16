import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dewpider",
		fr: "Araqua",
		es: "Dewpider",
		it: "Dewpider",
		pt: "Dewpider",
		de: "Araqua"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		751,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d’Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 40,

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
		cardmarket: 407969,
		tcgplayer: 201239
	}
}

export default card
