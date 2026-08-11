import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		528,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Jet Woofer",
				'fr-fr': "Infrasons",
			},
			effect: {
				'en-us': "For each Psychic Energy attached to this Pokémon, discard the top card of your opponent's deck.",
				'fr-fr': "Pour chaque Énergie Psychic attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acrobatics",
				'fr-fr': "Acrobatie",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shakes its tail vigorously when it emits ultrasonic waves strong enough to reduce concrete to rubble.",
	},

	thirdParty: {
		cardmarket: 280658,
		tcgplayer: 89726
	}
}

export default card
