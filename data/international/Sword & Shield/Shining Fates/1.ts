import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		'fr-fr': "Yanma",
		'en-us': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'fr-fr': "Cru-Ailes",
			'en-us': "Wing Attack",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539028,
				tcgplayer: 232348
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539028,
				tcgplayer: 232348
			}
		},
	],
}

export default card
