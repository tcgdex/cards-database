import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [431],
	set: Set,

	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Cat Kick",
			'fr-fr': "Coup d'Patte",
			'es-es': "Patada Gato",
			'it-it': "Calciogatto",
			'pt-br': "Chute do Gato",
			'de-de': "Katzenkick"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "When it's happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545671,
				tcgplayer: 234157
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545671,
				tcgplayer: 234157
			}
		},
	],
}

export default card
