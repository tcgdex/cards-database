import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "sui",
	category: "Pokemon",

	dexId: [594],

	description: {
		'en-us': "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face"
		},

		damage: 20
	}, {
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague"
		},

		damage: 60
	}],

	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo"
	},

	rarity: "None",
	hp: 100,
	types: ["Water"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281794,
				tcgplayer: 83507
			}
		}
	]
}

export default card

