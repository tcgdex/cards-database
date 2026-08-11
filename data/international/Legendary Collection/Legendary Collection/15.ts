import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Machamp"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [68],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Machoke"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Strikes Back"
			},
			effect: {
				en: "Whenever your opponent's attack damages Machamp (even if Machamp is Knocked Out), this power does 10 damage to the attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already affected by a Special Condition when your opponent attacks."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "Using its amazing muscles, it throws powerful punches that can knock its victim clear over the horizon."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274780,
				tcgplayer: 86957
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86957,
				cardmarket: 274780
			}
		}
	],

}

export default card
