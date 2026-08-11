import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Treecko",
		fr: "Arcko",
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Small hooks on the bottom of its feet catch on walls and ceilings. That is how it can hang from above.",
	},

	thirdParty: {
		cardmarket: 289699
	}
}

export default card
