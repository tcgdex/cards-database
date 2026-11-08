import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},

	illustrator: "Kouki Saitou",
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
			"Colorless"
		],
		name: {
			'en-us': "Lunge",
			'fr-fr': "Coup Rapide"
		},
		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		},
		damage: 30
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
		'en-us': "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon."
	},

	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280075,
				tcgplayer: 98710
			}
		},
	],

}

export default card
