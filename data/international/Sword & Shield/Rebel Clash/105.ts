import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [837],
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Most of its body has the same composition as coal. Fittingly, this Pokémon was first discovered in coal mines about 400 years ago."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457938,
				tcgplayer: 213193
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457938,
				tcgplayer: 213193
			}
		},
	],
}

export default card
