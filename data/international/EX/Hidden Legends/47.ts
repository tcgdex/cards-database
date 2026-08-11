import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'de-de': "Seejong"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [364],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Super Icy Wind",
				'fr-fr': "Vent super glacial",
				'de-de': "Super Icy Wind"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Reistance"
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud'krane",
				'de-de': "Skull Bash"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89029,
				cardmarket: 276121
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89029,
				cardmarket: 276121
			}
		},
	]
}

export default card
