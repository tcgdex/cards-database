import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Feraligatr",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Scare",
			},
			effect: {
				en: "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crushing Blow",
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
