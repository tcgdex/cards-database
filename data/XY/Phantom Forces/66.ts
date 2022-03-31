import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Klefki",
		fr: "Trousselin",
		es: "Klefki",
		it: "Klefki",
		pt: "Klefki",
		de: "Clavion"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		707,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				es: "Llamar a la Familia",
				it: "Cerca Famiglia",
				pt: "Chamar a Família",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 Pokémon Básicos e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dull Light",
				fr: "Lumière Tamisée",
				es: "Luz Dura",
				it: "Lucespenta",
				pt: "Luz Entorpecedora",
				de: "Gedämpftes Licht"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
