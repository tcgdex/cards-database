import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [207],
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It flies straight at its target's face then clamps down on the startled victim to inject poison."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545471,
				tcgplayer: 234247
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545471,
				tcgplayer: 234247
			}
		},
	],
}

export default card
