import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'de-de': "Webarak"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [167],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hang Down",
				'fr-fr': "Suspension",
				'de-de': "Herunterhängen"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spider Web",
				'fr-fr': "Toile",
				'de-de': "Spinnennetz"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89458,
				cardmarket: 279055
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89458,
				cardmarket: 279055
			}
		},
	],

}

export default card
