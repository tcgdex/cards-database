import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'de-de': "Flemmli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'es-es': "Ascuas",
				'it-it': "Braciere",
				'pt-br': "Brasa",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 361272,
		tcgplayer: 170838
	}
}

export default card
