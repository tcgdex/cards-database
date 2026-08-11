import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [47],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Drain",
				'fr-fr': "Aspirododo",
				'de-de': "Schlafentzug"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep. Remove 4 damage counters from Parasect.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi. Retirez 4 marqueurs de dégâts de Parasect.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt. Entferne 4 Schadensmarken von Parasek."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The larger the mushroom on its back grows, the stronger the mushroom spores it scatters."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87960,
				cardmarket: 279020
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87960,
				cardmarket: 279020
			}
		},
	],

}

export default card
