import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Raichu BREAK",
		'fr-fr': "Raichu TURBO",
		'es-es': "Raichu TURBO",
		'it-it': "Raichu TURBO",
		'pt-br': "Raichu TURBO",
		'de-de': "Raichu-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Grand Bolt",
				'fr-fr': "Foudre Grandiose",
				'es-es': "Rayo Colosal",
				'it-it': "Granbolide",
				'pt-br': "Raio Grandioso",
				'de-de': "Gewaltiger Blitz"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 170,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286296,
		tcgplayer: 107169
	}
}

export default card
