import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [504],
	set: Set,

	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'es-es': "Patrat",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'de-de': "Nagelotz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280092,
				tcgplayer: 98709
			}
		},
	],

}

export default card
