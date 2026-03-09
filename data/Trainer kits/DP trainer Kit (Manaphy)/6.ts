import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [394],
	set: Set,

	name: {
		en: "Prinplup",
		fr: "Prinplouf"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf"
	},

	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Aqua Shower",
				fr: "Aqua-douche"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				en: "Brine",
				fr: "Saumure"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "20+"
		}
	],

	description: {
		en: "It lives alone, away from others. Apparently, every one of them believes it is the most important."
	},

	retreat: 1
}

export default card
