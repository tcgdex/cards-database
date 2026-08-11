import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "tetsuya koizumi",

	attacks: [{
		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Stampede",
			'de-de': "Zertrampeln"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Tongue Slap",
			'fr-fr': "Gros Coup de Langue",
			'es-es': "Bofetón Lengua",
			'it-it': "Linguasberla",
			'pt-br': "Tongue Slap",
			'de-de': "Zungenschelle"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	description: {
		'en-us': "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds."
	},

	dexId: [536],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574137,
				tcgplayer: 246890
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574137,
				tcgplayer: 246890
			}
		},
	],
}

export default card
