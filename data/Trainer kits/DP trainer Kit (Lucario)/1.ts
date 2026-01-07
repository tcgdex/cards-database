import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [74],
	set: Set,

	name: {
		en: "Geodude",
		fr: "Racaillou"
	},

	illustrator: "Ken Sudimori",
	rarity: "None",
	category: "Pokemon",

	hp: 60,

	types: [
		"Fighting",
	],

	attacks: [{

		cost: [
			"Fighting",
		],

		name: {
			en: "Stone Throw",
			fr: "Jet-pierres"
		},

		effect: {
			en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "10+"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	description: {
		en: "Many live on mountain trails and remain half buried while keeping an eye on climbers"
	},

	retreat: 2,

}

export default card
