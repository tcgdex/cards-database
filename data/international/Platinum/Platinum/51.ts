import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Teleportation Burst",
				'fr-fr': "Téléportation explosive",
				'de-de': "Teleportation Burst"
			},
			effect: {
				'en-us': "You may switch Kirlia with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Kirlia avec 1 des Pokémon de Banc de votre adversaire.",
				'de-de': "You may switch Kirlia with 1 of your Benched Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super psy",
				'de-de': "Super Psy Bolt"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86468,
				cardmarket: 278472
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278472,
				tcgplayer: 86468
			}
		},
		{
			type:"normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480066
			}
		}
	],

}

export default card
