import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Lumineon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		457,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Finneon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Lure Ring",
			},
			effect: {
				en: "Once during your turn (before your attack), if Lumineon is your Active Pokémon, you may choose 1 of your opponent's Benched Pokémon that has maximum HP of 100 or more and switch it with 1 of the Defending Pokémon. This power can't be used if Lumineon is affected by a Special Condition.",
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
				en: "Reverse Stream",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Lumineon. Then, return all Water Energy attached to Lumineon to your hand.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
