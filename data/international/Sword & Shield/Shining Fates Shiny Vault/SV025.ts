import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [816],
	set: Set,

	name: {
		'fr-fr': "Larméléon",
		'en-us': "Sobble",
		'es-es': "Sobble",
		'it-it': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Pistolet à O",
			'en-us': "Water Gun",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539513,
				tcgplayer: 232375
			}
		},
	],
}

export default card
