import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [104],
	set: Set,

	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It wears its mother's skull on its head, so no one knows what its bare face looks like. However, it's clear that it's always crying."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545461,
				tcgplayer: 234245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545461,
				tcgplayer: 234245
			}
		},
	],
}

export default card
