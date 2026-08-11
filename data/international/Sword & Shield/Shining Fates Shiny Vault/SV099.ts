import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'fr-fr': "Rongourmand",
		'en-us': "Skwovet",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	illustrator: "Naoki Saito",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Found throughout the Galar region, this Pokémon becomes uneasy if its cheeks are ever completely empty of berries."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539883,
				tcgplayer: 232487
			}
		},
	],
}

export default card
