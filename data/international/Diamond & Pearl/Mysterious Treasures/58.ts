import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 90,

	types: [
		"Grass",
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
				'en-us': "Wild Spores",
				'fr-fr': "Spores sauvages",
				'de-de': "Wilde Sporen"
			},
			effect: {
				'en-us': "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Si Parasect a évolué de Paras lors de ce tour, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Wenn Parasek sich in diesem Zug aus Paras entwickelt hat, fügt dieser Angriff 40 Schadenspunkte zu und das Verteidigende Pokémon schläft jetzt und ist vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Extend Fungus",
				'fr-fr': "Champignon grandissant",
				'de-de': "Pilzausbreitung"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Parasect.",
				'fr-fr': "Retirez à Parasect 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Parasek."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A mushroom grown larger than the host's body controls PARASECT. It scatters poisonous spores.",
		'fr-fr': "Un champignon parasite plus gros que Parasect contrôle son corps. Il répand des spores empoisonnées."
	},

	thirdParty: {
		cardmarket: 277687,
		tcgplayer: 87958
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
