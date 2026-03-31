import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Servine",
		fr: "Lianaja",
		es: "Servine",
		de: "Efoserp",
		it: "Servine",
		pt: "Servine"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		496
	],
	hp: 100,
	types: [
		"Grass"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Snivy",
		fr: "Vipélierre",
		es: "Snivy",
		"es-mx": "Snivy",
		de: "Serpifeu",
		it: "Snivy",
		pt: "Snivy"
	},
	attacks: [
		{
			cost: [
				"Grass"
			],
			name: {
				en: "Solar Cutter",
				fr: "Coupe Solaire",
				es: "Corte Solar",
				de: "Solarschneider",
				it: "Taglio Solare",
				pt: "Cortador Solar"
			},
			damage: "40"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kurata So",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684401,
		cardmarket: 877417
	}
}

export default card
