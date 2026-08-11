import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Palkia G",
		'fr-fr': "Palkia ",
		'de-de': "Palkia G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [484],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Splashing Turn",
				'fr-fr': "Tour éclaboussant",
				'de-de': "Splashing Turn"
			},
			effect: {
				'en-us': "You may switch Palkia G with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger Palkia  avec 1 de vos Pokémon de Banc.",
				'de-de': "You may switch Palkia G with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pearl Breath",
				'fr-fr': "Haleine de perle",
				'de-de': "Pearl Breath"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 87917,
				cardmarket: 278433
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278433,
				tcgplayer: 87917
			}
		}
	],

}

export default card
