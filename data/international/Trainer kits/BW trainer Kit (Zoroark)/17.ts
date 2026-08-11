import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	stage: "Stage1",

	hp: 100,
	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	attacks: [{
		cost: [
			"Darkness"
		],
		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe"
		},
		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
		},
		damage: "20×"
	}, {
		cost: [
			"Darkness",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Night Daze",
			'fr-fr': "Explonuit"
		},
		damage: 80
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
		'en-us': "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents."
	},

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280070,
				tcgplayer: 98715
			}
		},
	],

}

export default card
