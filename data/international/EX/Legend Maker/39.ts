import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'de-de': "Maschock"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Paranoid",
				'fr-fr': "Paranoïaque",
				'de-de': "Verfolgungswahn"
			},
			effect: {
				'en-us': "As long as Machoke is Confused, Machoke's attacks do 50 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Machopeur est Confus, ses attaques infligent au Pokémon Défenseur 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Solange Maschock verwirrt ist, fügen Maschocks Angriffe dem Verteidigendem Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Split Kick",
				'fr-fr': "Coup en deux temps",
				'de-de': "Verteilter Tritt"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon Défenseurs.",
				'de-de': "Dieser Angriff fügt jedem Verteidigendem Pokémon 20 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276916,
		tcgplayer: 86979
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
