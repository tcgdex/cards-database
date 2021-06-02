import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Armaldo ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Twin Blade",
			},
			effect: {
				en: "Does 30 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic Claws",
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
