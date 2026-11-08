import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Elektek",
		'de-de': "Elektek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [125],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Thundershock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderpunch",
				'fr-fr': "Poing-Éclair",
				'de-de': "Thunderpunch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Electabuzz does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Elektek s'inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Electabuzz does 10 damage to itself."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It loves to feed on strong electricity. It occasionally appears around large power plants and so on."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 85116,
				cardmarket: 278549
			}
		}
	]
}

export default card
