import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		663,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Fletchinder",
		'fr-fr': "Braisillon",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Devastating Wind",
				'fr-fr': "Vent Dévastateur",
				'es-es': "Viento Devastador",
				'it-it': "Devastavento",
				'pt-br': "Vento Devastador",
				'de-de': "Wind der Verwüstung"
			},
			effect: {
				'en-us': "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
				'fr-fr': "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
				'es-es': "Tu rival baraja las cartas de su mano en su baraja y roba 4 cartas.",
				'it-it': "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
				'pt-br': "Seu oponente embaralha a mão no próprio deck e compra 4 cards.",
				'de-de': "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten."
			},

		},
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
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "In the fever of an exciting battle, it showers embers from the gaps between its feathers and takes to the air.",
	},

	thirdParty: {
		cardmarket: 281365,
		tcgplayer: 89739
	}
}

export default card
