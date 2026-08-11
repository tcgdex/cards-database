import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Surprise Punch",
				'fr-fr': "Raclée Surprise",
			},
			effect: {
				'en-us': "Move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The sound of its grass flute makes its listeners uneasy. It lives deep in forests.",
	},

	thirdParty: {
		cardmarket: 280296,
		tcgplayer: 87827
	}
}

export default card
