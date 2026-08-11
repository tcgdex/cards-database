import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [13],
	set: Set,

	name: {
		'fr-fr': "Aspicot",
		'en-us': "Weedle",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Piqûre",
			'en-us': "Bug Bite",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733608,
				tcgplayer: 502562,
				cardtrader: 261158
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733608,
				tcgplayer: 502562,
				cardtrader: 261158
			}
		},
	],

	illustrator: "nisimono",

	
}

export default card
