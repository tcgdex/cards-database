import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545341,
				tcgplayer: 234197
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 562456
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545341,
				tcgplayer: 234197
			}
		},
	],
}

export default card
