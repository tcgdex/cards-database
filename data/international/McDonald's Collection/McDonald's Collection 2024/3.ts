import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Miraidon",
		'fr-fr': "Miraidon",
		'es-es': "Miraidon",
		'it-it': "Miraidon",
		'pt-br': "Miraidon",
		'de-de': "Miraidon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1008],

	hp: 120,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Sharp Fang",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'en-us': "Lightning Laser",
			},
			effect: {
				'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 90,
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
				cardmarket: 802825,
				tcgplayer: 614372
			}
		}
	]
}

export default card

