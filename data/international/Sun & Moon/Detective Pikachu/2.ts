import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Framestore",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Table Service",
				'fr-fr': "Service à Table",
				'es-es': "Servicio de Mesa",
				'it-it': "Servizio al Tavolo",
				'pt-br': "Serviço de Mesa",
				'de-de': "Bedienung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 30 damage from 1 of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à l’un de vos Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare uno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch and Run",
				'fr-fr': "Frapper et Partir en Courant",
				'es-es': "Pega y Corre",
				'it-it': "Pugnofuga",
				'pt-br': "Socar e Correr",
				'de-de': "Schlagen und Rennen"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
	},

	thirdParty: {
		cardmarket: 370767,
		tcgplayer: 186003
	}
}

export default card
