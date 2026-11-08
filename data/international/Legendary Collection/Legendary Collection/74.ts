import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Eevee"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Wag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack Eevee during your opponent's next turn. (Benching either Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage."
			},
			damage: "10+",

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
	retreat: 1,


	description: {
		'en-us': "Its genetic code is irregular. It may mutate if it is exposed to radiation from elemental stones."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274839,
				tcgplayer: 85079
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85079,
				cardmarket: 274839
			}
		}
	],

}

export default card
