import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Crawdaunt ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Corphish",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Splash Back",
			},
			effect: {
				en: "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and return that Pokémon and all cards attached to it to his or her hand. This power can't be used if Crawdaunt ex is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Power Blow",
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Crawdaunt ex.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
