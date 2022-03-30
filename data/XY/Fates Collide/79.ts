import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lugia BREAK",
		fr: "Lugia TURBO",
		es: "Lugia TURBO",
		it: "Lugia TURBO",
		pt: "Lugia TURBO",
		de: "Lugia-TURBO"
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
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
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
				en: "Flash of Destruction",
				fr: "Flash de Destruction",
				es: "Destello de Destrucción",
				it: "Bagliore Distruttivo",
				pt: "Clarão da Destruição",
				de: "Zerstörungsblitz"
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
				es: "Descarta 2 Energías unidas a este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias ligadas a este Pokémon.",
				de: "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 150,

		}
	],

	retreat: 0
}

export default card
