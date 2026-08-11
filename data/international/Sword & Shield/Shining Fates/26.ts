import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [833],
	set: Set,

	name: {
		'fr-fr': "Khélocrok",
		'en-us': "Chewtle",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

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
		cost: ["Water"]
	}, {
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539153,
				tcgplayer: 232430
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539153,
				tcgplayer: 232430
			}
		},
	],
}

export default card
