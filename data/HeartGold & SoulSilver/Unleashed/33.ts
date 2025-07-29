import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang",
		de: "Metang"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Crane",
				fr: "Grue d’énergie",
				de: "Energiekran"
			},
			effect: {
				en: "Search your discard pile for up to 2 Psychic Energy cards and attach them to your Pokémon in any way you like.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Psychic dans votre pile de défausse et attachez-les à vos Pokémon comme bon vous semble.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psypunch",
				fr: "Coup de poing psy",
				de: "Psyhieb"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When two Beldum fuse together, a magnetic nervous system places their brains in union."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279189
	}
}

export default card
