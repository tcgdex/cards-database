import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [143],

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cartas.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Collapse",
				'fr-fr': "Effondrement",
				'es-es': "Colapso",
				'it-it': "Collassare",
				'pt-br': "Colapso",
				'de-de': "Kollaps"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep.",
				'fr-fr': "Ce Pokémon est maintenant Endormi.",
				'es-es': "Este Pokémon pasa a estar Dormido.",
				'it-it': "Questo Pokémon viene addormentato.",
				'pt-br': "Este Pokémon agora está Adormecido.",
				'de-de': "Dieses Pokémon schläft jetzt."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 150,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458093,
				tcgplayer: 213241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458093,
				tcgplayer: 213241
			}
		},
	],
}

export default card
