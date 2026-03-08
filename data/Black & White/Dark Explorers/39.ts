import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		es: "Plusle",
		it: "Plusle",
		pt: "Plusle",
		de: "Plusle"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

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
				en: "Tag Draw",
				fr: "Pioche Groupée"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si Négapi est sur votre Banc, piochez 4 cartes supplémentaires."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Ion",
				fr: "Cation"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280367,
		tcgplayer: 88173
	}
}

export default card
