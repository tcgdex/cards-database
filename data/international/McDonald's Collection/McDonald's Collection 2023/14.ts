import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [967],

	hp: 110,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Touring",
			},
			effect: {
				'en-us': "Draw 2 cards.",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Speed Attack",
				'fr-fr': "Attaque Rapide",
				'es-es': "Ataque Veloz",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Veloz",
				'de-de': "Tempoattacke"
			},
			damage: 100,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725431,
				tcgplayer: 516525
			}
		}
	]
}

export default card

