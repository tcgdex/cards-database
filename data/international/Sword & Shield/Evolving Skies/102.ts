import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "ryoma uratsuka",

	attacks: [{
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Rear Kick",
			'de-de': "Rückwärtskick"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "If a normally talkative child suddenly stops talking, it may have been replaced by Zorua."
	},

	dexId: [570],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574150,
				tcgplayer: 246899
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574150,
				tcgplayer: 246899
			}
		},
	],
}

export default card
