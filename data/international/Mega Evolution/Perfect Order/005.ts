import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [496],

	name: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'es-es': "Servine",
		'es-mx': "Servine",
		'de-de': "Efoserp",
		'it-it': "Servine",
		'pt-br': "Servine"
	},

	evolveFrom: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'es-es': "Snivy",
		'es-mx': "Snivy",
		'de-de': "Serpifeu",
		'it-it': "Snivy",
		'pt-br': "Snivy",
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Solar Cutter",
			'fr-fr': "Coupe Solaire",
			'es-es': "Corte Solar",
			'es-mx': "Corte Solar",
			'de-de': "Solarschneider",
			'it-it': "Taglio Solare",
			'pt-br': "Cortador Solar"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684401,
				cardmarket: 877417
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684401,
				cardmarket: 877417
			}
		}
	],

}

export default card
