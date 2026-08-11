import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [420],
	set: Set,

	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'pt-br': "Cherubi",
		'de-de': "Kikugi"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'it-it': "Fogliame",
			'pt-br': "Folhagem",
			'de-de': "Blattwerk"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The deeper a Cherubi's red, the more nutrients it has stockpiled in its body. And the sweeter and tastier its small ball!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544931,
				tcgplayer: 234050
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544931,
				tcgplayer: 234050
			}
		},
	],
}

export default card
