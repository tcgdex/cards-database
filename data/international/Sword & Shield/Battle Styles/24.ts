import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [499],
	set: Set,

	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'de-de': "Ferkokel"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'de-de': "Floink"
	},

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30,
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

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545026,
				tcgplayer: 234126
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545026,
				tcgplayer: 234126
			}
		},
	],
}

export default card
