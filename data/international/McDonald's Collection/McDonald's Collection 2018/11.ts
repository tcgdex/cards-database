import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Evolution",
			},
			effect: {
				'en-us': "When you attach a basic Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon to evolve it. Then, shuffle your deck."
			}
		}
	],
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				'en-us': "Quick Draw",
			},
			effect: {
				'en-us': "Flip a coin. If heads, draw a card."
			},
			damage: 80,
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366779,
				tcgplayer: 180459
			}
		}
	]
}

export default card

