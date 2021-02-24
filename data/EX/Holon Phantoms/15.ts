import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Raichu δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zzzap",
			},
			effect: {
				en: "Does 20 damage to each Pokémon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metallic Thunder",
			},
			effect: {
				en: "You may discard 2 Metal Energy attached to Raichu. If you do, this attack's base damage is 90 instead of 50.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
