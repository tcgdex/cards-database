import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [580],
	set: Set,

	name: {
		'fr-fr': "Couaneton",
		'en-us': "Ducklett",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539863,
				tcgplayer: 232482
			}
		},
	],
}

export default card
