import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Shock Bolt",
				'fr-fr': "Choc’Éclair",
				'es-es': "Rayo Impacto",
				'it-it': "Lamposhock",
				'pt-br': "Raio de Choque",
				'de-de': "Schock-Blitz"
			},
			effect: {
				'en-us': "Discard all Lightning Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie Lightning de ce Pokémon.",
				'es-es': "Descarta todas las Energías Lightning de este Pokémon.",
				'it-it': "Scarta tutte le Energie Lightning assegnate a questo Pokémon.",
				'pt-br': "Descarte todas as Energias Lightning deste Pokémon.",
				'de-de': "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 30,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores lots of air in its soft fur, allowing it to stay cool in summer and warm in winter.",
	},

	thirdParty: {
		cardmarket: 368972,
		tcgplayer: 183814
	}
}

export default card
