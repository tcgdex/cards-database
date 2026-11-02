import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Kabuto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [140],

	hp: 30,

	types: [
		"Fighting"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Kabuto Armor"
			},
			effect: {
				en: "Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack does only half the damage to Kabuto (rounded down to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274813,
				tcgplayer: 86381
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86381,
				cardmarket: 274813
			}
		}
	],

}

export default card
