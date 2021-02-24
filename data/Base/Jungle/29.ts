import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Venomoth",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Venom Powder",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
