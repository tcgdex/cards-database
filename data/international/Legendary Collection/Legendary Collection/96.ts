import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Tentacool"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [72],

	hp: 30,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Cowardice"
			},
			effect: {
				'en-us': "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Acid"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		'en-us': "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274861,
				tcgplayer: 89864
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89864,
				cardmarket: 274861
			}
		}
	],

	retreat: 0
}

export default card
