import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cellular Companions",
				'fr-fr': "Compères Cellulaires",
				'es-es': "Compañeros Celulares",
				'it-it': "Sodalizio Cellulare",
				'pt-br': "Companheiros Celulares",
				'de-de': "Zellenbund"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, your Zygarde’s and Zygarde-GX’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, les attaques de vos Zygarde et Zygarde-GX infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon esté en tu Banca, los ataques de tus Zygarde y Zygarde-GX hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, gli attacchi dei tuoi Zygarde e dei tuoi Zygarde-GX infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon estiver no seu Banco, os ataques dos seus Zygarde e Zygarde-GX causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, fügen die Attacken deiner Zygarde und Zygarde-GX dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Boost Fang",
				'fr-fr': "Croc Boosté",
				'es-es': "Impulso Colmillo",
				'it-it': "Zanne Potenziate",
				'pt-br': "Caninos de Impulso",
				'de-de': "Antriebsfänge"
			},
			effect: {
				'en-us': "Attach a Fighting Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fighting de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Fighting de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Fighting dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia Fighting da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Fighting-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This is Zygarde when about 10% of its pieces have been assembled. It leaps at its opponent's chest and sinks its sharp fangs into them.",
	},

	thirdParty: {
		cardmarket: 388422,
		tcgplayer: 195081
	}
}

export default card
