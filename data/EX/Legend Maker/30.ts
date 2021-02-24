import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Cascoon",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		268,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge",
			},
			effect: {
				en: "Once during your turn (before your attack), if Cascoon is your Active Pokémon, you may flip a coin. If heads, search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward. This power can't be used if Cascoon is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
