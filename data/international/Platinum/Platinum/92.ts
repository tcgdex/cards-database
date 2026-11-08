import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polychombr",
		'de-de': "Shuppet"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [353],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Hypnotic Gaze",
				'fr-fr': "Regard hypnotique",
				'de-de': "Hypnotic Gaze"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Fade Out",
				'fr-fr': "Faiblir",
				'de-de': "Fade Out"
			},
			effect: {
				'en-us': "Return Shuppet and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
				'fr-fr': "Reprenez dans votre main Polychombr ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
				'de-de': "Return Shuppet and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves vengeful emotions and hangs in rows under the eaves of houses where vengeful people live."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89201,
				cardmarket: 278513
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278513,
				tcgplayer: 89201
			}
		}
	],

}

export default card
