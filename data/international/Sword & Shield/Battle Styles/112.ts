import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [22],
	set: Set,

	name: {
		'en-us': "Fearow",
		'fr-fr': "Rapasdepic",
		'es-es': "Fearow",
		'it-it': "Fearow",
		'pt-br': "Fearow",
		'de-de': "Ibitak"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Spearow",
		'fr-fr': "Piafabec",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},

	attacks: [{
		name: {
			'en-us': "Drill Peck",
			'fr-fr': "Bec Vrille",
			'es-es': "Pico Taladro",
			'it-it': "Perforbecco",
			'pt-br': "Bico Broca",
			'de-de': "Bohrschnabel"
		},

		damage: 70,
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

	regulationMark: "E",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "Carrying food through Fearow's territory is dangerous. It will snatch the food away from you in a flash!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545641,
				tcgplayer: 234151
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545641,
				tcgplayer: 234151
			}
		},
	],
}

export default card
