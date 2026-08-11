import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [779],
	set: Set,

	name: {
		'en-us': "Bruxish",
		'fr-fr': "Denticrisse",
		'es-es': "Bruxish",
		'it-it': "Bruxish",
		'pt-br': "Bruxish",
		'de-de': "Knirfish"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Its skin is thick enough to fend off Mareanie's spikes. With its robust teeth, Bruxish crunches up the spikes and eats them."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545326,
				tcgplayer: 234189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545326,
				tcgplayer: 234189
			}
		},
	],
}

export default card
