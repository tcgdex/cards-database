import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
		es: "Groudon-EX",
		it: "Groudon-EX",
		pt: "Groudon-EX",
		de: "Groudon-EX"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Tromp",
				fr: "Piaffement"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giant Claw",
				fr: "Griffe Géante"
			},
			effect: {
				en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur a déjà 2 marqueurs de dégâts ou plus, cette attaque inflige 40 dégâts supplémentaires."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4
}

export default card
