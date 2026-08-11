import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Rogne",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88093,
				cardmarket: 278811
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278811,
				tcgplayer: 88093
			}
		},
	],

}

export default card
