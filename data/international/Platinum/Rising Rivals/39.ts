import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Electrode G",
		'fr-fr': "Electrode  Niv. 38",
		'de-de': "Lektrobal G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Reckless Bomb",
				'fr-fr': "Bombe imprudente",
				'de-de': "Achtlose Bombardierung"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Electrode G does 100 damage to itself.",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Electrode  s'inflige 100 dégâts.",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Lektrobal G fügt sich selbst 100 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'énergie",
				'de-de': "Energiereflektion"
			},
			effect: {
				'en-us': "Move an Energy card attached to Electrode G to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée à Electrode  sur 1 des Pokémon de votre Banc.",
				'de-de': "Entferne 1 an Lektrobal G angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278613,
				tcgplayer: 85166
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278613,
				tcgplayer: 85166
			}
		},
	],

}

export default card
