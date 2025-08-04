import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Métang",
		es: "Metang",
		it: "Metang",
		pt: "Metang",
		de: "Metang"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Core Beam",
				fr: "Faisceau Central",
				es: "Rayo Nuclear",
				it: "Raggio Nucleico",
				pt: "Feixe do Núcleo",
				de: "Kernstrahl"
			},
			effect: {
				en: "Discard a Metal Energy from this Pokémon.",
				fr: "Défaussez une Énergie Metal de ce Pokémon.",
				es: "Descarta 1 Energía Metal de este Pokémon.",
				it: "Scarta un’Energia Metal assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Metal deste Pokémon.",
				de: "Lege 1 Metal-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297541,
		tcgplayer: 130996
	}
}

export default card
