import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [833],
	set: Set,

	name: {
		'fr-fr': "Khélocrok",
		'en-us': "Chewtle",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	illustrator: "otumami",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Pistolet à O",
			'en-us': "Water Gun",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It starts off battles by attacking with its rock-hard horn, but as soon as the opponent flinches, this Pokémon bites down and never lets go."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539528,
				tcgplayer: 232379
			}
		},
	],
}

export default card
