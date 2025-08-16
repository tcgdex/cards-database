import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Spheal",
		fr: "Obalie",
		es: "Spheal",
		it: "Spheal",
		pt: "Spheal",
		de: "Seemops"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'Glace",
				es: "Bola Hielo",
				it: "Palla Gelo",
				pt: "Bola de Gelo",
				de: "Frostbeule"
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
		cardmarket: 273576,
		tcgplayer: 95944
	}
}

export default card
