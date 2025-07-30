import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Exeggutor",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Teleport",
			},
			effect: {
				en: "Switch Exeggutor with 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273962,
		tcgplayer: 42478
	}
}

export default card
