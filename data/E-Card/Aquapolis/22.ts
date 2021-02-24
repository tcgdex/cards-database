import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Magneton",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Flow",
			},
			effect: {
				en: "Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent's Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can't be used if Magneton is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Wave",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
