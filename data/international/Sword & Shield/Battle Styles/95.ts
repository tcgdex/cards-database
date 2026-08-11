import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "They make repeated eerie howls before dawn to call attention to their pack."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545566,
				tcgplayer: 234226
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545566,
				tcgplayer: 234226
			}
		},
	],
}

export default card
