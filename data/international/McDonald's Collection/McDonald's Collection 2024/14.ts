import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'it-it': "Rayquaza",
		'pt-br': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 130,

	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Jaw Lock",
				'fr-fr': "Croque Fort",
				'es-es': "Bloqueo de Mandíbulas",
				'it-it': "Serrafauci",
				'pt-br': "Travamento de Mandíbula",
				'de-de': "Kiefersperre"
			},
			damage: 30,
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Power Blast",
			},
			damage: 120,
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
			},
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802836,
				tcgplayer: 614383
			}
		}
	]
}

export default card

