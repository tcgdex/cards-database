import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelenox",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [355],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surprise",
				'fr-fr': "Surprise",
				'de-de': "Surprise"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la. Votre adversaire doit ensuite mélanger cette carte à son deck.",
				'de-de': "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275838,
				tcgplayer: 85044
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275838,
				tcgplayer: 85044
			}
		},
	],

}

export default card
