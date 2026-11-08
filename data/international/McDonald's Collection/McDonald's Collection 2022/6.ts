import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 110,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Wintry Call",
			},
			effect: {
				'en-us': "Search your deck for up to 2 Melony cards, reveal them, and put them into your hand. Then, shuffle your deck."
			}
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'en-us': "Icy Wind",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep."
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
			type: 'holo',
			thirdParty: {
				cardmarket: 670471,
				tcgplayer: 281485
			}
		}
	]
}

export default card

