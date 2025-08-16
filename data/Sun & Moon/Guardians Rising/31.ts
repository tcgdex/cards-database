import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Chilly",
				fr: "Glacial",
				es: "Fresquito",
				it: "Addiaccio",
				pt: "Frio",
				de: "Frösteln"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
				es: "Vaho Gélido",
				it: "Alitogelido",
				pt: "Respiração de Gelo",
				de: "Eisesodem"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297493,
		tcgplayer: 130931
	}
}

export default card
