import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Samurott",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Dewott",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Armor",
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
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
				en: "Hydro Pump",
			},
			effect: {
				en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281190,
		tcgplayer: 88911
	}
}

export default card
