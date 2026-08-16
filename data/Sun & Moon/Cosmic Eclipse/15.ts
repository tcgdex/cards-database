import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		es: "Deerling",
		it: "Deerling",
		pt: "Deerling",
		de: "Sesokitz"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		585,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Their coloring changes according to the season and can be slightly affected by the temperature and humidity as well.",
		de: "Unabhängig von der Jahreszeit ändert sich seine Farbe auch bei wechselnder Temperatur oder Luftfeuchtigkeit leicht."
	},

	thirdParty: {
		cardmarket: 407729,
		tcgplayer: 201167
	}
}

export default card
