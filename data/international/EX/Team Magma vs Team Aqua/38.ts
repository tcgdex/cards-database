import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Rhyhorn",
		'fr-fr': "Rhinocorne de Team Magma",
		'de-de': "Team Magmas Rihorn"
	},

	illustrator: "Mt. TBT",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [111],

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
				'en-us': "Double Damage",
				'fr-fr': "Double dégâts",
				'de-de': "Double Damage"
			},
			effect: {
				'en-us': "Does 10 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon Défenseur.",
				'de-de': "Does 10 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Rush",
				'fr-fr': "Ruée de corne",
				'de-de': "Horn Rush"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 89842
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275815,
				tcgplayer: 89842
			}
		},
	],

}

export default card
