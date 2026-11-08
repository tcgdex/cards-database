import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		554,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When it sleeps, it pulls its limbs into its body and its internal fire goes down to 1,100 F.",
	},

	thirdParty: {
		cardmarket: 280614,
		tcgplayer: 84722
	}
}

export default card
