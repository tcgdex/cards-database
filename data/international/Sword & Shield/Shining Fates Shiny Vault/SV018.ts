import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		'fr-fr': "Grillepattes",
		'en-us': "Sizzlipede",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	attacks: [{
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Fournaise",
			'en-us': "Combustion",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 50,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539478,
				tcgplayer: 232366
			}
		},
	],
}

export default card
