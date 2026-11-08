import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [296],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fling",
				'fr-fr': "Lancer",
				'de-de': "Fling"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'de-de': "Low Kick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [{
		type: "normal",
		thirdParty: {
			cardmarket: 275705,
			tcgplayer: 87126
		}
	},
	{
		type: "reverse",
		thirdParty: {
			tcgplayer: 87126
		}
	},
	{
		type: "normal",
		subtype: "no-e-reader",
		thirdParty: {
			tcgplayer: 125142
		}
	}
	],

}

export default card
