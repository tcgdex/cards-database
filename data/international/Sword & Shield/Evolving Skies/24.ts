import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "OKACHEKE",

	attacks: [{
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Rain Splash",
			'de-de': "Regenplatscher"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "It has been found that its brain cells are 10 times more active when Psyduck is experiencing a headache."
	},

	dexId: [54],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574048,
				tcgplayer: 246816
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574048,
				tcgplayer: 246816
			}
		},
	],
}

export default card
