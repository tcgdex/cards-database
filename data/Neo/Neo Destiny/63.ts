import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed",
				fr: "Mue",
				de: "Shed"
			},
			effect: {
				en: "Remove 1 damage counter from Dratini.",
				fr: "Retirez un marqueur de dégâts sur Minidraco.",
				de: "Remove 1 damage counter from Dratini."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Fury Attack"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Grand dès sa naissance, ce Pokémon augmente de taille durant sa vie en changeant régulièrement de peau."
	}
}

export default card
