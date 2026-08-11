import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		714,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d’Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Fruits are its favorite foods. This gourmet carefully picks out just the ripe ones using its sonar.",
	},

	thirdParty: {
		cardmarket: 388582,
		tcgplayer: 195156
	}
}

export default card
