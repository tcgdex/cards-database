import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Electrode G",
		fr: "Electrode  Niv. 38",
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
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Electrode does 100 damage to itself.",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Electrode  s'inflige 100 dégâts.",
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
			},
			effect: {
				en: "Move an Energy card attached to Electrode to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie attachée à Electrode  sur 1 des Pokémon de votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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



}

export default card
