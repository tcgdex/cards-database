import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Friend",
				'fr-fr': "Ami Féérique",
			},
			effect: {
				'en-us': "If you have any Fairy Pokémon on your Bench, this attack does 30 more damage.",
				'fr-fr': "Si vous avez un Pokémon Fairy sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This fluffiness makes everyone go crazy. Is it really that charming?",
	},

	thirdParty: {
		cardmarket: 288533
	}
}

export default card
