import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [322],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Burn Off",
				'fr-fr': "Crâmer",
				'de-de': "Abbrennen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [{
		type: "normal",
		thirdParty: {
			cardmarket: 275709,
			tcgplayer: 87805
		}
	},
	{
		type: "reverse",
		thirdParty: {
			tcgplayer: 87805
		}
	},
	{
		type: "normal",
		subtype: "no-e-reader",
		thirdParty: {
			tcgplayer: 125126
		}
	}
	],

}

export default card
