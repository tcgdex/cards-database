import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Swipe",
				fr: "Griffe",
				de: "Swipe"
			},
			effect: {
				en: "Flip a coin. If heads, discard all Trainer cards attached to your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez toutes les cartes Dresseur attachées au Pokémon de votre adversaire.",
				de: "Flip a coin. If heads, discard all Trainer cards attached to your opponent´s Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Quick Attack"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Ses pattes cachent des griffes aiguisées. S'il est attaqué, il sort ses griffes et surprend son ennemi."
	}
}

export default card
