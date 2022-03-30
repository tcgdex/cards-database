import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Raichu BREAK",
		fr: "Raichu TURBO",
		es: "Raichu TURBO",
		it: "Raichu TURBO",
		pt: "Raichu TURBO",
		de: "Raichu-TURBO"
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
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
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
				en: "Grand Bolt",
				fr: "Foudre Grandiose",
				es: "Rayo Colosal",
				it: "Granbolide",
				pt: "Raio Grandioso",
				de: "Gewaltiger Blitz"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
				es: "Descarta todas las Energías unidas a este Pokémon.",
				it: "Scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia ligada a este Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 170,

		}
	],

	retreat: 0
}

export default card
