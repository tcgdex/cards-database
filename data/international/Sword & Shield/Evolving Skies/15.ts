import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			'en-us': "Blot",
			'fr-fr': "Pâté",
			'es-es': "Absorción",
			'it-it': "Macchia",
			'pt-br': "Blot",
			'de-de': "Klecks"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Heal 10 damage from this Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	},

	dexId: [829],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574039,
				tcgplayer: 246828
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574039,
				tcgplayer: 246828
			}
		},
	],
}

export default card
