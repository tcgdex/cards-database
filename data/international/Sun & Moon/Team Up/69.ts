import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Cosmog",
		'fr-fr': "Cosmog",
		'es-es': "Cosmog",
		'it-it': "Cosmog",
		'pt-br': "Cosmog",
		'de-de': "Cosmog"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		789,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cosmic Guard",
				'fr-fr': "Barrière Cosmique",
				'es-es': "Guardia Cósmica",
				'it-it': "Guardia Cosmica",
				'pt-br': "Proteção Cósmica",
				'de-de': "Kosmische Wacht"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, prevenirá todo o dano causado a este Pokémon por ataques (seus e do seu oponente).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Attacken (deine und die deines Gegners) zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mumble",
				'fr-fr': "Murmure",
				'es-es': "Farfullar",
				'it-it': "Borbottio",
				'pt-br': "Resmungo",
				'de-de': "Grummeln"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In ages past, it was called the child of the stars. It's said to be a Pokémon from another world, but no specific details are known.",
	},

	thirdParty: {
		cardmarket: 368999,
		tcgplayer: 183847
	}
}

export default card
