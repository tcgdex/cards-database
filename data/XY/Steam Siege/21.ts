import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Talonflame BREAK",
		fr: "Flambusard TURBO",
		es: "Talonflame TURBO",
		it: "Talonflame TURBO",
		pt: "Talonflame TURBO",
		de: "Fiaro-TURBO"
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
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	stage: "BREAK",

	attacks: [
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
