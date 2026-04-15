import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		252,
	],
	set: Set,
	name: {
		en: "Treecko",
		fr: "Arcko",
	},
	rarity: "None",
	category: "Pokemon",
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
			damage: "10+",
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],

	illustrator: "Akira Komayama",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293317,
				tcgplayer: 110429
			}
		}
	]
}

export default card
