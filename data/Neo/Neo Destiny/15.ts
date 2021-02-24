import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Togetic",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Togepi",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Gift",
			},
			effect: {
				en: "When you play Light Togetic from your hand, your opponent may search his or her deck for a Pokémon Tool card, show that card to you, and put it into his or her hand. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sweet Kiss",
			},
			effect: {
				en: "Your opponent may draw a card.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
