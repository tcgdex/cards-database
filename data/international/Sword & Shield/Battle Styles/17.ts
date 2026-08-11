import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [824],
	set: Set,

	name: {
		'en-us': "Blipbug",
		'fr-fr': "Larvadar",
		'es-es': "Blipbug",
		'it-it': "Blipbug",
		'pt-br': "Blipbug",
		'de-de': "Sensect"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Often found in gardens, this Pokémon has hairs on its body that it uses to assess its surroundings."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544991,
				tcgplayer: 234085
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544991,
				tcgplayer: 234085
			}
		},
	],
}

export default card
