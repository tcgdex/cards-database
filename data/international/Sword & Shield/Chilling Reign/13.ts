import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [761],
	set: Set,

	name: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Splash",
			'fr-fr': "Trempette",
			'es-es': "Salpicadura",
			'it-it': "Splash",
			'pt-br': "Borrifada",
			'de-de': "Platscher"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "When under attack, it secretes a sweet and delicious sweat. The scent only calls more enemies to it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567093,
				tcgplayer: 241662
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567093,
				tcgplayer: 241662
			}
		},
	],
}

export default card
