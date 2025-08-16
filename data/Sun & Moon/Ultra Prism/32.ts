import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
		es: "Piplup",
		it: "Piplup",
		pt: "Piplup",
		de: "Plinfa"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
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
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
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

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315962,
		tcgplayer: 157649
	}
}

export default card
