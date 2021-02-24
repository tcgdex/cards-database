import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Raichu GL",
		fr: "Raichu  Niv. 46",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thunder Throw",
				fr: "Lancer de tonnerre",
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Repeat Lightning",
				fr: "Éclair à répétition",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each of your opponent's Benched Pokémon that has any damage counters on it.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire possédant des marqueurs de dégât.",
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




}

export default card
