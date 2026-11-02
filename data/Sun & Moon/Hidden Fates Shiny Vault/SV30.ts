import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		de: "Tanhel"
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
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
			damage: 20,

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
	retreat: 1,




	description: {
		en: "Its cells are all magnets. It uses magnetism to communicate with others of its kind.",
		de: "Seine Zellen sind magnetisch geladen. Es kommuniziert mit anderen, indem es magnetische Impulse aussendet."
	},
}

export default card
