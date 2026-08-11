import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [54],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confusion Wave",
				'fr-fr': "Vague de confusion",
				'de-de': "Confusion Wave"
			},
			effect: {
				'en-us': "Both Psyduck and the Defending Pokémon are now Confused.",
				'fr-fr': "Psykokwak et le Pokémon Défenseur sont maintenant Confus.",
				'de-de': "Both Psyduck and the Defending Pokémon are now Confused."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 88432
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 88432
			}
		},
	],

}

export default card
