import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'de-de': "Wadribie"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [415],

	hp: 60,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Collect"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shoot Through",
				'fr-fr': "Passer à travers",
				'de-de': "Shoot Through"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "The trio is together from birth. It constantly gathers honey from flowers to please VESPIQUEN."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84395,
				cardmarket: 278492
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278492,
				tcgplayer: 84395
			}
		}
	],

}

export default card
