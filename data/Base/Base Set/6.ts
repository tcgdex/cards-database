import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados",
		it: "Gyarados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		it: "Magikarp"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
				de: "Drachenwut",
				it: "Ira di drago"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulles d'O",
				de: "Blubbstrahl",
				it: "Bollaraggio"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	description: {
		fr: "Gigantesque et maléfique, il est capable de raser une ville dans un accès de rage terrifiante.",
		it: "Appare raramente nelle regioni selvagge. Enorme e feroce, se si infuria è capace di distruggere intere città. LIV 41 N.130"
	},

	thirdParty: {
		cardmarket: 273701,
		tcgplayer: 42404
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/034.ts"
		}
	]
}

export default card
