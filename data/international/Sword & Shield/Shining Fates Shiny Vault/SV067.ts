import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [837],
	set: Set,

	name: {
		'fr-fr': "Charbi",
		'en-us': "Rolycoly",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Most of its body has the same composition as coal. Fittingly, this Pokémon was first discovered in coal mines about 400 years ago."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539723,
				tcgplayer: 232437
			}
		},
	],
}

export default card
