import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Typhlosion",
	},
	illustrator: "K.  Hoshiba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heat Up",
			},
			effect: {
				en: "Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent's Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Singe",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 50,

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
