import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Rhydon",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		112,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Rhyhorn",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bench Guard",
			},
			effect: {
				en: "As long as Brock's Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock's Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lariat",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274138,
		tcgplayer: 83978
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
