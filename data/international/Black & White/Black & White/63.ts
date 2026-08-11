import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		551,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tombe de Sable",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It moves along below the sand's surface, except for its nose and eyes. A dark membrane shields its eyes from the sun.",
	},

	thirdParty: {
		cardmarket: 279801,
		tcgplayer: 88912
	}
}

export default card
