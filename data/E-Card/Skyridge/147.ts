import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Crobat",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat's type (color) becomes the same as that type of energy until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Poison Flame",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned and Poisoned.",
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Squared Attack",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
