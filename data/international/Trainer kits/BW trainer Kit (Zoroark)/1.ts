import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},
		damage: 10
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche"
		},
		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	description: {
		'en-us': "Its cute act is a ruse. When victims let down their guard, they find their items taken. It attacks with sharp claws."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280093,
				tcgplayer: 98703
			}
		},
	],

}

export default card
