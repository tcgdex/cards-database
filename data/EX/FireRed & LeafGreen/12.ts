import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recharge",
				fr: "Recharger"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to Raichu. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Raichu. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Reflection",
				fr: "Coup d'tonnerre"
			},
			effect: {
				en: "You may move any number of Lightning Energy cards attached to Raichu to another of your Pokémon.",
				fr: "Vous pouvez déplacer autant de cartes Énergie  attachées à Raichu que vous le voulez sur un autre de vos Pokémon."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
