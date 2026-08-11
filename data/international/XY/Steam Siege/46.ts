import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Transfer Pain",
				'fr-fr': "Transfert de Douleur",
				'es-es': "Transferir Dolor",
				'it-it': "Spostafflitto",
				'pt-br': "Transferir Dor",
				'de-de': "Schmerztransfer"
			},
			effect: {
				'en-us': "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
				'fr-fr': "Déplacez 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
				'es-es': "Mueve 1 contador de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
				'it-it': "Sposta un segnalino danno da uno dei tuoi Pokémon a uno dei Pokémon del tuo avversario.",
				'pt-br': "Mova 1 contador de danos de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
				'de-de': "Verschiebe 1 Schadensmarke von 1 deiner Pokémon auf 1 Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon are called the \"Signpost for Wandering Spirits.\" Children holding them sometimes vanish.",
	},

	thirdParty: {
		cardmarket: 291537,
		tcgplayer: 121135
	}
}

export default card
