import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Dusclops",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
		fr: "Skélénox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dark One-eye",
				fr: "Borgne obscur",
			},
			effect: {
				en: "You may discard a card from your hand. If you do, your opponent discards a card from his or her hand.",
				fr: "Vous pouvez défausser une carte de votre main. Votre adversaire défausse alors une carte de sa main.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
