import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Klawf",
		'fr-fr': "Craparoi",
		'es-es': "Klawf",
		'it-it': "Klawf",
		'pt-br': "Klawf",
		'de-de': "Klibbe"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [950],

	hp: 130,

	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'en-us': "Vise Grip",
				'fr-fr': "Force Poigne",
				'es-es': "Agarre",
				'it-it': "Presa",
				'pt-br': "Agarramento Compressor",
				'de-de': "Klammer"
			},
			damage: 50,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'en-us': "Adrenaline Hammer",
			},
			damage: 130,
			effect: {
				'en-us': "This Pokémon is now Confused.",
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725428,
				tcgplayer: 516522
			}
		}
	]
}

export default card

