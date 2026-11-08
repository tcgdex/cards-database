import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Crane",
				'fr-fr': "Grue d’énergie",
				'de-de': "Energiekran"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Psychic Energy cards and attach them to your Pokémon in any way you like.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie Psychic dans votre pile de défausse et attachez-les à vos Pokémon comme bon vous semble.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psypunch",
				'fr-fr': "Coup de poing psy",
				'de-de': "Psyhieb"
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
		'en-us': "When two Beldum fuse together, a magnetic nervous system places their brains in union."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87381,
				cardmarket: 279189
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87381,
				cardmarket: 279189
			}
		},
	],

}

export default card
