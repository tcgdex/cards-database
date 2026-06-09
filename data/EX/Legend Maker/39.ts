import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		de: "Maschock"
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
		en: "Machop",
		fr: "Machoc"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Paranoid",
				fr: "Paranoïaque",
				de: "Verfolgungswahn"
			},
			effect: {
				en: "As long as Machoke is Confused, Machoke's attacks do 50 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Tant que Machopeur est Confus, ses attaques infligent au Pokémon Défenseur 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Maschock verwirrt ist, fügen Maschocks Angriffe dem Verteidigendem Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Split Kick",
				fr: "Coup en deux temps",
				de: "Verteilter Tritt"
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
				fr: "Inflige 20 dégâts à chacun des Pokémon Défenseurs.",
				de: "Dieser Angriff fügt jedem Verteidigendem Pokémon 20 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing magnum",
				de: "Magnum-Schlag"
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
