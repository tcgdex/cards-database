import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Talonflame BREAK",
		'fr-fr': "Flambusard TURBO",
		'es-es': "Talonflame TURBO",
		'it-it': "Talonflame TURBO",
		'pt-br': "Talonflame TURBO",
		'de-de': "Fiaro-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare Blitz",
				'fr-fr': "Boutefeu",
				'es-es': "Envite Ígneo",
				'it-it': "Fuococarica",
				'pt-br': "Blitz de Labaredas",
				'de-de': "Flammenblitz"
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
				'es-es': "Descarta todas las Energías Fire unidas a este Pokémon.",
				'it-it': "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia Fire ligada a este Pokémon.",
				'de-de': "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel."
			},
			damage: 150,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 290989,
		tcgplayer: 120150
	}
}

export default card
