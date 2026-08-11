import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litwick",
		'fr-fr': "Funécire",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fireworks",
				'fr-fr': "Feu d’Artifice",
				'es-es': "Fuegos Artificiales",
				'it-it': "Fuochi d’Artificio",
				'pt-br': "Fogos de Artifício",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 40,

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
		'en-us': "The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
	},

	thirdParty: {
		cardmarket: 387977,
		tcgplayer: 194947
	}
}

export default card
