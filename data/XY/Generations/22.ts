import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Epic Splash",
				fr: "Trempette Épique",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288462,
		tcgplayer: 113680
	}
}

export default card
