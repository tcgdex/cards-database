import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Lugia BREAK",
		'fr-fr': "Lugia TURBO",
		'es-es': "Lugia TURBO",
		'it-it': "Lugia TURBO",
		'pt-br': "Lugia TURBO",
		'de-de': "Lugia-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'es-es': "Lugia",
		'it-it': "Lugia",
		'pt-br': "Lugia",
		'de-de': "Lugia"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flash of Destruction",
				'fr-fr': "Flash de Destruction",
				'es-es': "Destello de Destrucción",
				'it-it': "Bagliore Distruttivo",
				'pt-br': "Clarão da Destruição",
				'de-de': "Zerstörungsblitz"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon.",
				'es-es': "Descarta 2 Energías unidas a este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon.",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 150,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289900,
		tcgplayer: 117854
	}
}

export default card
