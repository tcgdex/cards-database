import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Rhyhorn",
		'fr-fr': "Rhinocorne de Team Magma",
		'de-de': "Team Magmas Rihorn"
	},

	illustrator: "Yosuke Da Silva",
	rarity: "Common",
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
				"Fighting",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Coup double",
				'de-de': "Double Stab"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Strike",
				'fr-fr': "Deuxième coup",
				'de-de': "Second Strike"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà 2 marqueurs de dégât, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

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
				cardmarket: 275844,
				tcgplayer: 89843
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275844,
				tcgplayer: 89843
			}
		},
	],

}

export default card
