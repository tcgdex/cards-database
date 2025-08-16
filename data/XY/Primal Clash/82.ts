import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Trapinch",
		fr: "Kraknoix",
		es: "Trapinch",
		it: "Trapinch",
		pt: "Trapinch",
		de: "Knacklion"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		328,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
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
		cardmarket: 273613,
		tcgplayer: 95980
	}
}

export default card
