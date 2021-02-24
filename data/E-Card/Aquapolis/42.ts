import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Victreebel",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fragrance Trap",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. This power can't be used if Victreebel is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
