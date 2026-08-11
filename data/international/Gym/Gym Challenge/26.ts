import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Muk"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Grimer"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Drain"
			},
			effect: {
				en: "If an opponent's attack does damage to Koga's Muk (even if Koga's Muk is Knocked Out), flip a coin. If heads and if it has any, choose 1 Energy card attached to the attacking Pokémon and discard it. This power can't be used if Koga's Muk is already Asleep, Confused, or Paralyzed when your opponent attacks."
			}
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
				en: "Sludge Whirlpool"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86513,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86513,
				cardmarket: 274294
			}
		},
	],
}

export default card
