import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Nest Ball",
		fr: "Faiblo Ball",
		es: "Nido Ball",
		it: "Minor Ball",
		pt: "Bola de Ninho",
		de: "Nestball"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
		es: "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
		it: "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		pt: "Procure por um Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
		de: "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Toyste Beach"
}

export default card