import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Métang",
		de: "Metang"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
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
		de: "Tanhel"
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
				de: "Kernstrahl"
			},
			effect: {
				en: "Discard a Metal Energy from this Pokémon.",
				fr: "Défaussez une Énergie Metal de ce Pokémon.",
				de: "Lege 1 {M}-Energie von diesem Pokémon auf deinen Ablagestapel."
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




	description: {
		en: "When two Beldum link together, their psychic power is doubled. Their intelligence, however, remains unchanged.",
		de: "Zwei Tanhel haben sich vereinigt und so ihre Psycho-Kräfte verdoppelt. Ihre Denkfähigkeit bleibt dabei aber unverändert."
	},
}

export default card
