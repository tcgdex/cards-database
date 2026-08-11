import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [602],

	hp: 40,

	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Levitate"
			},
			effect: {
				'en-us': "If this Pokémon has any Energy attached, it has no Retreat Cost."
			}
		}
	],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'en-us': "Tiny Charge",
			},
			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670475,
				tcgplayer: 281472
			}
		}
	]
}

export default card

