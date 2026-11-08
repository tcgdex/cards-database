import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hop's Bag",
		'fr-fr': "Sac de Nabil",
		'es-es': "Bolsa de Paul",
		'de-de': "Hops Tasche",
		'it-it': "Borsa di Hop",
		'pt-br': "Bolsa do Lupo",
		'es-mx': "Bolsa de Paul"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 Basic Hop's Pokémon and put them onto your Bench. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de Nabil de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon de Paul Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Hops-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon di Hop Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 Pokémon do Lupo Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo hasta 2 Pokémon de Paul Básicos y ponlos en tu Banca. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Item",
	regulationMark: "I",
	illustrator: "AYUMI ODASHIMA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817299,
				tcgplayer: 623574
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817299,
				tcgplayer: 623574
			}
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
