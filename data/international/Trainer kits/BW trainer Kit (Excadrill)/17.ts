import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "5ban Graphics",
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	hp: 110,

	types: [
		"Fighting"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier"
		},

		damage: 30
	}, {
		cost: [
			"Fighting",
			"Fighting",
			"Fighting"
		],
		name: {
			'en-us': "Drill Run",
			'fr-fr': "Tunnelier"
		},
		effect: {
			'en-us': "Discard an Energy attached to the Defending Pokémon.",
			'fr-fr': "Défaussez une Énergie attachée au Pokémon Défenseur."
		},
		damage: 80
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	description: {
		'en-us': "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates."
	},

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280070,
				tcgplayer: 98695
			}
		},
	],

}

export default card
