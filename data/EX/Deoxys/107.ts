import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rayquaza Star",
		fr: "Rayquaza ☆",
		de: "Rayquaza *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Spiral Rush",
				fr: "Course en spirale",
				de: "Spiral Rush"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Holy Star",
				fr: "Étoile sacrée",
				de: "Holy Star"
			},
			effect: {
				en: "Discard all Energy cards attached to Rayquaza Star. This attack does 100 damage to each of your opponent's Pokémon-ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les cartes Énergie attachées à Rayquaza . Cette attaque inflige 100 dégâts à chacun des Pokémon-ex de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Discard all Energy cards attached to Rayquaza *. This attack does 100 damage to each of your opponent's Pokémon-ex. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 88636
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
