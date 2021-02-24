import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Shiftry",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nuzleaf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fan Action",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Shiftry is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stadium Power",
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

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
