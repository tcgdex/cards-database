import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",
	illustrator: "Yuya Oka",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Tackle",
			'de-de': "Tackle"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Mud Shot",
			'de-de': "Lehmschuss"
		},

		damage: 50,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	description: {
		'en-us': "This Pokémon is active during the day and passes the cold desert nights burrowed snugly into the sand."
	},

	dexId: [449],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574132,
				tcgplayer: 246878
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574132,
				tcgplayer: 246878
			}
		},
	],
}

export default card
