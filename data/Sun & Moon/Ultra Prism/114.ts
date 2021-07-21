import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
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
				en: "Resource Management",
				fr: "Gestion des Ressources",
				es: "Gestión de Recursos",
				it: "Gestione Risorse",
				pt: "Gerenciamento de Recursos",
				de: "Bodenschätze"
			},
			effect: {
				en: "Put 3 cards from your discard pile on the bottom of your deck in any order.",
				fr: "Placez 3 cartes de votre pile de défausse en dessous de votre deck dans l’ordre de votre choix.",
				es: "Pon 3 cartas de tu pila de descartes en la parte inferior de tu baraja en el orden que quieras.",
				it: "Prendi tre carte dalla tua pila degli scarti e mettile in fondo al tuo mazzo nell’ordine che preferisci.",
				pt: "Coloque 3 cartas da sua pilha de descarte como as 3 últimas cartas do seu baralho em qualquer ordem.",
				de: "Lege 3 Karten aus deinem Ablagestapel in beliebiger Reihenfolge unter dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Profound Knowledge",
				fr: "Connaissance Profonde",
				es: "Conocimiento Profundo",
				it: "Conoscenza Profonda",
				pt: "Conhecimento Profundo",
				de: "Tiefes Wissen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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



}

export default card
