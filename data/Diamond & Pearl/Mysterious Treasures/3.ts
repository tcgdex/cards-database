import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ambipom",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		424,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Aipom",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Influence",
			},
			effect: {
				en: "Your opponent flips a coin until he or she gets heads. For each tails, remove an Energy card attached to the Defending Pokémon and put it on the bottom of your opponent's deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charity Tail",
			},
			effect: {
				en: "Before Ambipom does damage, your opponent may discard 2 cards from his or her hand. If he or she does, this attack's base damage is 10 instead of 80.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],





}

export default card
