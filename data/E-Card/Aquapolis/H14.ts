import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Kingdra",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		230,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seadra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Cyclone",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapids",
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
