import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Drowzee"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [96],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Long-Distance Hypnosis"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep; if tails, your Active Pokémon is now Asleep. The power can't be used if Drowzee is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Not popular with girls because of its attitude. Can often be heard muttering to itself in a low voice."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274838,
				tcgplayer: 84970
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84970,
				cardmarket: 274838
			}
		}
	],

}

export default card
