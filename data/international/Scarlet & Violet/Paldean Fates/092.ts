import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [43],
	set: Set,

	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751631,
				tcgplayer: 534459,
				cardtrader: 274276
			}
		},
	],

	illustrator: "otumami",

	description: {
		'en-us': "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
	},

}

export default card
