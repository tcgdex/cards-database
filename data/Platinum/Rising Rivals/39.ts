import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Electrode G",
		fr: "Electrode  Niv. 38",
		de: "Lektrobal G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Reckless Bomb",
				fr: "Bombe imprudente",
				de: "Achtlose Bombardierung"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Electrode does 100 damage to itself.",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Electrode  s'inflige 100 dégâts.",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Lektrobal G fügt sich selbst 100 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
				de: "Energiereflektion"
			},
			effect: {
				en: "Move an Energy card attached to Electrode to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Electrode  sur 1 des Pokémon de votre Banc.",
				de: "Entferne 1 an Lektrobal G angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 85166
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
