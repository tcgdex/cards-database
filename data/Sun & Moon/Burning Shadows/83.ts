import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
		es: "Grimer de Alola",
		it: "Grimer di Alola",
		pt: "Grimer de Alola",
		de: "Alola-Sleima"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Division",
				fr: "Division",
				es: "División",
				it: "Serie",
				pt: "Divisão",
				de: "Teilung"
			},
			effect: {
				en: "Search your deck for Alolan Grimer and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez Tadmorv d’Alola dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Grimer de Alola y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Grimer di Alola e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por Grimer de Alola no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach Alola-Sleima und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slippery Sludge",
				fr: "Gadoue Glissante",
				es: "Lodo Resbaladizo",
				it: "Melma Scivolosa",
				pt: "Lodo Escorregadio",
				de: "Schlüpfriger Schlamm"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
