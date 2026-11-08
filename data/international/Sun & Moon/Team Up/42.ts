import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electric Punch",
				'fr-fr': "Poing Électrique",
				'es-es': "Puño Eléctrico",
				'it-it': "Pugno Elettrico",
				'pt-br': "Murro Elétrico",
				'de-de': "Elektroschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
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
			damage: 60,

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

	retreat: 2,

	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. It fires hair that zaps on impact.",
	},

	thirdParty: {
		cardmarket: 368973,
		tcgplayer: 183815
	}
}

export default card
