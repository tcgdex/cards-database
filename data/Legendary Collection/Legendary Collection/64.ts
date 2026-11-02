import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Snorlax"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [143],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Thick Skinned"
			},
			effect: {
				en: "Snorlax can't become Asleep, Confused, Paralyzed, Poisoned, or Burned. This power stops working while Snorlax is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads the Defending Pokémon is now Paralyzed."
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 4,


	description: {
		en: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274829,
				tcgplayer: 89386
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89386,
				cardmarket: 274829
			}
		}
	],

}

export default card
