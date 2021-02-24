import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Ninetales ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Intense Glare",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
			},
			effect: {
				en: "Discard a Fire Energy attached to Ninetales ex.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
