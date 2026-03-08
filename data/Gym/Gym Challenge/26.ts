import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Muk",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grimer",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Drain",
			},
			effect: {
				en: "If an opponent's attack does damage to Koga's Muk (even if Koga's Muk is Knocked Out), flip a coin. If heads and it has any, choose 1 Energy card attached to the attacking Pokémon and discard it. This power can't be used if Koga's Muk is already Asleep, Confused, or Paralyzed when your opponent attacks.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274294,
		tcgplayer: 86513
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
