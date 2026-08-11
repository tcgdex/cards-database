import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Force Palm",
				'fr-fr': "Forte-Paume",
				'de-de': "Kraftwelle"
			},
			effect: {
				'en-us': "Count the number of damage counters on Medicham. Put that many damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Comptabilisez le nombre de marqueurs de dégât sur Charmina. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Zähle die Anzahl der Schadensmarken, die auf Meditalis liegen. Lege die gleiche Anzahl Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Kick",
				'fr-fr': "Coup tournant",
				'de-de': "Wirbelkick"
			},
			effect: {
				'en-us': "Medicham does 20 damage to itself.",
				'fr-fr': "Charmina s'inflige 20 dégâts.",
				'de-de': "Meditalis fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Through yoga training, it has honed its sixth sense. Its movements are elegant.",
		'fr-fr': "Il a développé son sixième sens grâce au yoga. Ses mouvements sont gracieux."
	},

	thirdParty: {
		cardmarket: 277531,
		tcgplayer: 87275
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
