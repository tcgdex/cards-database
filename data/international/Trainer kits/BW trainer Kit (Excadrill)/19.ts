import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},

	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},

	stage: "Stage1",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Collect",
			'fr-fr': "Collectionner"
		},
		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},
		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "It loyally follows its Trainer's orders. For ages, they have helped Trainers raise Pokémon."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280064,
				tcgplayer: 98701
			}
		},
	],

}

export default card
