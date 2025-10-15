import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
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
		en: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wild Spores",
				fr: "Spores sauvages",
				de: "Wilde Sporen"
			},
			effect: {
				en: "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Si Parasect a évolué de Paras lors de ce tour, cette attaque inflige 40 dégâts et le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				de: "Wenn Parasek sich in diesem Zug aus Paras entwickelt hat, fügt dieser Angriff 40 Schadenspunkte zu und das Verteidigende Pokémon schläft jetzt und ist vergiftet."
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
				en: "Extend Fungus",
				fr: "Champignon grandissant",
				de: "Pilzausbreitung"
			},
			effect: {
				en: "Remove 2 damage counters from Parasect.",
				fr: "Retirez à Parasect 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Parasek."
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

	description: {
		fr: "Un champignon parasite plus gros que Parasect contrôle son corps. Il répand des spores empoisonnées."
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
