import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Downpour",
				fr: "Averse",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Riptide",
				fr: "Courant",
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy card in your discard pile. Then, shuffle those cards into your deck.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie Water dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
