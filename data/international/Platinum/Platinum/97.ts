import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'de-de': "Wablu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [333],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sing",
				'fr-fr': "Berceuse",
				'de-de': "Sing"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Run Around",
				'fr-fr': "Courir dans tous les sens",
				'de-de': "Run Around"
			},
			effect: {
				'en-us': "You may switch Swablu with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Tylton avec 1 des Pokémon de votre Banc.",
				'de-de': "You may switch Swablu with 1 of your Benched Pokémon."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It can't relax if it or its surroundings are not clean. It wipes off dirt with its wings."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89658,
				cardmarket: 278421
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278421,
				tcgplayer: 89658
			}
		}
	],

	retreat: 0
}

export default card
