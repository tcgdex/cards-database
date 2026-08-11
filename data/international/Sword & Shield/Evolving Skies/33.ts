import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'es-es': "Lombre",
		'it-it': "Lombre",
		'pt-br': "Lombre",
		'de-de': "Lombrero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "miki kudo",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Wave Splash",
			'de-de': "Wellenplatscher"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'de-de': "Loturzel"
	},

	description: {
		'en-us': "It lives at the water's edge where it is sunny. It sleeps on a bed of water grass by day and becomes active at night."
	},

	dexId: [271],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574057,
				tcgplayer: 246830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574057,
				tcgplayer: 246830
			}
		},
	],
}

export default card
