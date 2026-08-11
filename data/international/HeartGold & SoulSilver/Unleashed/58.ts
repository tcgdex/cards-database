import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'de-de': "Quapsel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [60],

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
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Pokémon de base et placez-la sur votre Banc. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Razor Fin",
				'fr-fr': "Aileron-rasoir",
				'de-de': "Rasierflosse"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The direction of its belly spiral differs by area. The equator is thought to have an effect on this."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88260,
				cardmarket: 279214
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88260,
				cardmarket: 279214
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 450128,
				tcgplayer: 164216
			}
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 164217
			}
		}
	],

}

export default card
