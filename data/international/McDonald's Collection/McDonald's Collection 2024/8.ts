import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Koraidon",
		'fr-fr': "Koraidon",
		'es-es': "Koraidon",
		'it-it': "Koraidon",
		'pt-br': "Koraidon",
		'de-de': "Koraidon"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1007],

	hp: 130,

	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Claw Clash",
			},
			damage: 70,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				'en-us': "Wild Impact",
			},
			damage: 190,
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
			},
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802830,
				tcgplayer: 614377
			}
		}
	]
}

export default card

