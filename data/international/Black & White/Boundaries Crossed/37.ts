import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deep Dive",
				'fr-fr': "Plongée Profonde",
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, heal 40 damage from this Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
	},

	thirdParty: {
		cardmarket: 280624,
		tcgplayer: 83686
	}
}

export default card
