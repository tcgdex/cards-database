import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Regirock ex",
		fr: "Regirock ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
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
				en: "Healing Stone",
				fr: "Pierre guérisseuse"
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Regirock ex.",
				fr: "N'importe quand entre deux tours, retirez à Regirock ex 1 marqueur de dégât."
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
				en: "Tonnage",
				fr: "Surpuissance"
			},
			effect: {
				en: "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself.",
				fr: "Vous pouvez infliger 60 dégâts plus 20 dégâts supplémentaires. Regirock ex s'inflige alors 30 dégâts."
			},
			damage: "60+",

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
