import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		765,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Resource Management",
				'fr-fr': "Gestion des Ressources",
				'es-es': "Gestión de Recursos",
				'it-it': "Gestione Risorse",
				'pt-br': "Gerenciamento de Recursos",
				'de-de': "Bodenschätze"
			},
			effect: {
				'en-us': "Put 3 cards from your discard pile on the bottom of your deck in any order.",
				'fr-fr': "Placez 3 cartes de votre pile de défausse en dessous de votre deck dans l’ordre de votre choix.",
				'es-es': "Pon 3 cartas de tu pila de descartes en la parte inferior de tu baraja en el orden que quieras.",
				'it-it': "Prendi tre carte dalla tua pila degli scarti e mettile in fondo al tuo mazzo nell’ordine che preferisci.",
				'pt-br': "Coloque 3 cartas da sua pilha de descarte como as 3 últimas cartas do seu baralho em qualquer ordem.",
				'de-de': "Lege 3 Karten aus deinem Ablagestapel in beliebiger Reihenfolge unter dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Profound Knowledge",
				'fr-fr': "Connaissance Profonde",
				'es-es': "Conocimiento Profundo",
				'it-it': "Conoscenza Profonda",
				'pt-br': "Conhecimento Profundo",
				'de-de': "Tiefes Wissen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Deep in the jungle, high in the lofty canopy, this Pokémon abides. On rare occasions, it shows up at the beach to match wits with Slowking.",
	},

	thirdParty: {
		cardmarket: 316040,
		tcgplayer: 157731
	}
}

export default card
