import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Submerge",
				'fr-fr': "Submerger",
				'es-es': "Hundir",
				'it-it': "Immergersi",
				'pt-br': "Submergir",
				'de-de': "Untertauchen"
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
				'es-es': "Mientras este Pokémon esté en tu Banca, evita todo el daño infligido a este Pokémon por ataques (tanto tuyos como de tu rival).",
				'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni tutti i danni inflitti a questo Pokémon dagli attacchi, sia tuoi che del tuo avversario.",
				'pt-br': "Desde que este Pokémon esteja em seu Banco, previne todos os danos causados a este Pokémon por ataques (seus e do seu oponente).",
				'de-de': "Solang sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden, der diesem Pokémon durch Angriffe (deine und die deines Gegners) zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dig Through",
				'fr-fr': "Tunnel Profond",
				'es-es': "Atravesar Excavando",
				'it-it': "Cunicolo",
				'pt-br': "Escavação",
				'de-de': "Durchgraben"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
	},

	thirdParty: {
		cardmarket: 293409,
		tcgplayer: 124068
	}
}

export default card
