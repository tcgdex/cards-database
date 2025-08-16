import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camérupt",
		es: "Camerupt",
		it: "Camerupt",
		pt: "Camerupt",
		de: "Camerupt"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Flare",
				fr: "Flamboiement Intense",
				es: "Fuerte Llama",
				it: "Vampata Potente",
				pt: "Labareda Forte",
				de: "Großes Auflodern"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 387952,
		tcgplayer: 194940
	}
}

export default card
