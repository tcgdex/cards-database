import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		de: "Safcon"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [731],

	dexId: [
		11,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
		de: "Raupy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its shell is filled with a thick liquid. All of the cells throughout its body are being rebuilt in preparation for evolution.",
		de: "Sein Panzer birgt ein dickflüssiges Inneres. In Vorbereitung auf seine Entwicklung wird seine Zellstruktur vollständig umgestaltet."
	},

	thirdParty: {
		cardmarket: 396592,
		tcgplayer: 197644
	}
}

export default card
