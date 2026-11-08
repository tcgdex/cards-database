import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [843],
	set: Set,

	name: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'es-es': "Coletón",
			'it-it': "Codabotta",
			'pt-br': "Surra de Cauda",
			'de-de': "Schweifvertrimmer"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 60,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545516,
				tcgplayer: 234257
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545516,
				tcgplayer: 234257
			}
		},
	],
}

export default card
