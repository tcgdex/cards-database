import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
		'es-es': "Latios",
		'it-it': "Latios",
		'pt-br': "Latios",
		'de-de': "Latios"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Extract",
				'fr-fr': "Extraction d’Énergie",
				'es-es': "Extracción de Energía",
				'it-it': "Estrazione Energia",
				'pt-br': "Extrair Energia",
				'de-de': "Energieanziehung"
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Luster Purge",
				'fr-fr': "Lumi-Éclat",
				'es-es': "Resplandor",
				'it-it': "Abbagliante",
				'pt-br': "Purga de Esplendor",
				'de-de': "Scheinwerfer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Energy from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est pile, défaussez toute l’Énergie de ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It understands human speech and is highly intelligent. It is a tender Pokémon that dislikes fighting.",
	},
}

export default card
