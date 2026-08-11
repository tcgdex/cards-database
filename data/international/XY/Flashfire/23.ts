import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Energy Grace",
				'fr-fr': "Prodige d'Énergie",
				'es-es': "Gracia de Energía",
				'it-it': "Energigrazia",
				'pt-br': "Indulgência de Energia",
				'de-de': "Energienachschlag"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may Knock Out this Pokémon. If you do, attach 3 basic Energy cards from your discard pile to 1 of your Pokémon (excluding Pokémon-EX).",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre ce Pokémon K.O. Dans ce cas, attachez 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon (excepté les Pokémon-EX).",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes dejar Fuera de Combate a este Pokémon. Si lo haces, une 3 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon (excluidos los Pokémon-EX).",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere KO questo Pokémon. Se lo fai, assegna a uno dei tuoi Pokémon (esclusi i Pokémon-EX) tre carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode Nocautear este Pokémon. Se fizer isso, ligue 3 cards de Energia básica da sua pilha de descarte a 1 dos seus Pokémon (não inclui Pokémon-EX).",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon kampfunfähig machen. Wenn du das machst, lege 3 Basis-Energiekarten von deinem Ablagestapel an 1 deiner Pokémon an (außer Pokémon-EX)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'es-es': "Cascada",
				'it-it': "Cascata",
				'pt-br': "Cachoeira",
				'de-de': "Kaskade"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Milotic is breathtakingly beautiful. Those that see it are said to forget their combative spirits.",
	},

	thirdParty: {
		cardmarket: 281506,
		tcgplayer: 91156
	}
}

export default card
