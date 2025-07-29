import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Persian",
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fascinate",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274771
	}
}

export default card
