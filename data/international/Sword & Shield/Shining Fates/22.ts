import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		'fr-fr': "Mustébouée",
		'en-us': "Buizel",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'pt-br': "Buizel",
		'de-de': "Bamelin"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Pluie Éclaboussante",
			'en-us': "Rain Splash",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539133,
				tcgplayer: 232418
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539133,
				tcgplayer: 232418
			}
		},
	],
}

export default card
