import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
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
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		it: "Fletchinder",
		pt: "Fletchinder",
		de: "Dartignis"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Devastating Wind",
				fr: "Vent Dévastateur",
				es: "Viento Devastador",
				it: "Devastavento",
				pt: "Vento Devastador",
				de: "Wind der Verwüstung"
			},
			effect: {
				en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
				fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
				es: "Tu rival baraja las cartas de su mano en su baraja y roba 4 cartas.",
				it: "Il tuo avversario rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
				pt: "Seu oponente embaralha a mão no próprio deck e compra 4 cards.",
				de: "Dein Gegner mischt seine Hand zurück in sein Deck und zieht 4 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
				es: "Envite Ígneo",
				it: "Fuococarica",
				pt: "Blitz de Labaredas",
				de: "Flammenblitz"
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
				es: "Descarta todas las Energías Fire unidas a este Pokémon.",
				it: "Scarta tutte le Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia Fire ligada a este Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Fire-Energien auf deinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 281365
	}
}

export default card
