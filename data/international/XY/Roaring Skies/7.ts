import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'es-es': "Dustox",
		'it-it': "Dustox",
		'pt-br': "Dustox",
		'de-de': "Pudox"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
		'de-de': "Panekon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twilight Poison",
				'fr-fr': "Poison Nocturne",
				'es-es': "Veneno Ocaso",
				'it-it': "Veleno Crepuscolare",
				'pt-br': "Veneno do Crepúsculo",
				'de-de': "Dämmergift"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
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

	retreat: 2,

	description: {
		'en-us': "It violently flutters its wings to scatter toxic dust when attacked. It becomes active after sunset.",
	},

	thirdParty: {
		cardmarket: 282675,
		tcgplayer: 98043
	}
}

export default card
