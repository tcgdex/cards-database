import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [301],

	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Captivating Tail",
				'fr-fr': "Queue Envoûtante",
				'es-es': "Cola Cautivadora",
				'it-it': "Coda Ammaliante",
				'pt-br': "Cauda Cativante",
				'de-de': "Hinreißender Schweif"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moon Impact",
				'fr-fr': "Impact Lunaire",
				'es-es': "Impacto Lunar",
				'it-it': "Impatto Lunare",
				'pt-br': "Impacto Lunar",
				'de-de': "Mondeinschlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It is highly popular among female Trainers for its sublime fur. It does not keep a nest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483589,
				tcgplayer: 219342
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483589,
				tcgplayer: 219342
			}
		},
	],
}

export default card
