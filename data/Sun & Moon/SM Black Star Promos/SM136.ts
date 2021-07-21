import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Latios",
		fr: "Latios",
		es: "Latios",
		it: "Latios",
		pt: "Latios",
		de: "Latios"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
				en: "Energy Extract",
				fr: "Extraction d’Énergie",
				es: "Extracción de Energía",
				it: "Estrazione Energia",
				pt: "Extrair Energia",
				de: "Energieanziehung"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Básica y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia base e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia básica e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
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
				en: "Luster Purge",
				fr: "Lumi-Éclat",
				es: "Resplandor",
				it: "Abbagliante",
				pt: "Purga de Esplendor",
				de: "Scheinwerfer"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez toute l’Énergie de ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
				de: "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
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



}

export default card
