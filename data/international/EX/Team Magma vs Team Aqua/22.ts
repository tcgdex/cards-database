import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Rhydon",
		'fr-fr': "Rhinoféros de Team Magma",
		'de-de': "Team Magmas Rizeros"
	},

	illustrator: "T. Honda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 80,

	types: [
		"Fighting"
	],

	stage: "Stage1",

	attacks: [
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
				'en-us': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégâts, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écrasement au sol",
				'de-de': "Land Crush"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard an Energy card attached to Team Magma's Rhydon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une carte Énergie attachée à Rhinoféros de Team Magma.",
				'de-de': "Flip a coin. If tails, discard and Energy card attached to Team Magma´s Rhydon."
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


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275799,
				tcgplayer: 89841
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275799,
				tcgplayer: 89841
			}
		},
	],

}

export default card
