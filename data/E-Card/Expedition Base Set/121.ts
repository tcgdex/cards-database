import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Fighting Cube 01",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: ""Big Mama" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	dexId: [
		52,
	],

	hp: 50,

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
				en: "Violent Rage",
				fr: "Double griffe",
				de: "Double Scratch"
			},
			effect: {
				en: "Attach this card to 1 of your Fighting Pokémon in play. That Pokémon my use this card's attack instead of its own. At the end of your turn, discard Fighting Cube 01.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pay Day",
				fr: "Jackpot",
				de: "Pay Day"
			},
			effect: {
				en: "Flip a coin. If heads, draw a card.",
				fr: "Lancez une pièce. Si c'est face, piochez une carte.",
				de: "Flip a coin. If heads, draw a card."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87315,
				cardmarket: 274996
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
