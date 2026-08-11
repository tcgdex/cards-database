import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'it-it': "Delphox",
		'pt-br': "Delphox",
		'de-de': "Fennexis"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		655,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
				'es-es': "Llama abrasadora",
				'it-it': "Fulminshock",
				'pt-br': "Fogo-fátuo",
				'de-de': "Irrlicht"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'es-es': "Llamarada",
				'it-it': "Fuocobomba",
				'pt-br': "Rajada de Fogo",
				'de-de': "Feuersturm"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It gazes into the flame at the tip of its branch to achieve a focused state, which allows it to see into the future.",
	},

	thirdParty: {
		cardmarket: 281276,
		tcgplayer: 84753
	}
}

export default card
