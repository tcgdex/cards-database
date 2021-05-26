import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Groudon ex",
	},
	illustrator: "Takabon",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fighting",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hard Rock",
			},
			effect: {
				en: "As long as Groudon ex has 1 Energy or less attached to it, damage done to any of your Groudon ex in play by attacks is reduced by 20 (after applying Weakness and Resistance). You can't use more than 1 Hard Rock Poké-Body each turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Power Blast",
			},
			effect: {
				en: "Discard 2 Energy attached to Groudon ex.",
			},
			damage: 100,

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
