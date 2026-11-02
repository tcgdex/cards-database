import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Raichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Surprise Thunder"
			},
			effect: {
				en: "Flip a coin. If heads, flip another coin. If the second coins is heads, this attack does 20 damage to each of your opponent's Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Stores up electricity in its body, then suddenly releases it to surprise and shock everyone."
	},

	variants: [{
		type: "normal",
		thirdParty: {
			tcgplayer: 125089
		}
	},
	{
		type: "reverse",
		thirdParty: {
			tcgplayer: 84646
		}
	},
	{
		type: "holo",
		thirdParty: {
			tcgplayer: 84646,
			cardmarket: 274772
		}
	},
	{
		type: "reverse",
		size: 'jumbo',
		thirdParty: {
			tcgplayer: 210843
		}
	},
	]
}

export default card
