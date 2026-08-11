import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It bounces around on its tail to keep its heart pumping. It carries a pearl from Clamperl on its head."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545386,
				tcgplayer: 234221
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545386,
				tcgplayer: 234221
			}
		},
	],
}

export default card
