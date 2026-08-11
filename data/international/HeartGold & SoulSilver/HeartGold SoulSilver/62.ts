import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'de-de': "Traumato"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [96],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Inducer",
				'fr-fr': "Poussododo",
				'de-de': "Schlafeinflößer"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Asleep.",
				'fr-fr': "Échangez le Pokémon Défenseur avec un Pokémon du Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Das neue Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle douce",
				'de-de': "Sanfter Hieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84977,
				cardmarket: 279034
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84977,
				cardmarket: 279034
			}
		},
	],

}

export default card
