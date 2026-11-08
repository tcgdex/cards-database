import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [498],
	set: Set,

	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'de-de': "Floink"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545021,
				tcgplayer: 234124
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 562455
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545021,
				tcgplayer: 234124
			}
		},
	],
}

export default card
