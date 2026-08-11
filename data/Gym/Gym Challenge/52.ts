import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Lt. Surge's Electrode"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Voltorb"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Shock Blast"
			},
			effect: {
				en: "If Lt. Surge's Electrode is your Active Pokémon and gets damaged (even if it's Knocked Out), flip a coin. If tails, this power does 20 damage to each Active Pokémon. This power works even if Lt. Surge's Electrode is already Asleep, Confused, or Paralyzed when it takes damage."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Power Ball"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage plus 10 more damage for each heads."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86853,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86853,
				cardmarket: 274320
			}
		},
	],
}

export default card
