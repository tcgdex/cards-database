import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Abomasnow",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		460,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Snover",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Glacier Snow",
			},
			effect: {
				en: "If Abomasnow is your Active Pokémon and is damaged by an opponent's attack (even if Abomasnow is Knocked Out), the Attacking Pokémon is now Asleep.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Blizzard",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],





}

export default card
