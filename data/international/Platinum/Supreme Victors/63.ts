import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'de-de': "Schlapor"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [428],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser glace",
				'de-de': "Eisstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'de-de': "Rückwärtskick"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86826,
				cardmarket: 278754
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278754,
				tcgplayer: 86826
			}
		},
	],

}

export default card
