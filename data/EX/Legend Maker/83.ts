import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Arcanine ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Remedy",
			},
			effect: {
				en: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "[Pokémon-ex rule]",
			},
			effect: {
				en: "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Overrun",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

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
