import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
		de: "Ponita"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'Pattes",
				es: "Patada Destrucción",
				it: "Calcio Esplosivo",
				pt: "Chute Poderoso",
				de: "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de Flammes",
				es: "Cola de Fuego",
				it: "Coda-Fiamma",
				pt: "Cauda de Chamas",
				de: "Flammenschweif"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293375,
		tcgplayer: 124032
	}
}

export default card
