import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "5ban Graphics",

	description: {
		'en-us': "The more intimidating the opponent it faces, the more this Pokémon’s blood boils. It will attack with no regard for its own safety."
	},

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 20
	}, {
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297247,
				tcgplayer: 152837
			}
		},
	],

}

export default card