import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [43],
	set: Set,

	name: {
		'fr-fr': "Mystherbe",
		'en-us': "Oddish",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranch'Herbe",
			'en-us': "Razor Leaf",
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

	description: {
		'en-us': "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733638,
				tcgplayer: 516156,
				cardtrader: 261136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733638,
				tcgplayer: 516156,
				cardtrader: 261136
			}
		},
	],

	illustrator: "Sekio",

	
}

export default card
