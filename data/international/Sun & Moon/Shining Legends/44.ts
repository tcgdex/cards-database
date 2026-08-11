import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple Éclate",
				'es-es': "Golpe Triple",
				'it-it': "Tripla Schiacciata",
				'pt-br': "Pancada Tripla",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 60 more damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 60 puntos de daño más por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 60 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 60 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Golurk Hammer",
				'fr-fr': "Maillet Golemastoc",
				'es-es': "Martillo Golurk",
				'it-it': "Martello Golurk",
				'pt-br': "Martelo Golurk",
				'de-de': "Golgantes-Hammer"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is said that Golurk were ordered to protect people and Pokémon by the ancient people who made them.",
	},

	thirdParty: {
		cardmarket: 302182,
		tcgplayer: 146708
	}
}

export default card
