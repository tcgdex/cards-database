import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buddy-Buddy Poffin",
		'fr-fr': "Poffin Copain-Copain",
		'de-de': "Dicke-Freunde-Knursp",
		'it-it': "Poffin del Cuore",
		'es-es': "Pokochos Gemelos",
		'pt-br': "Poffin de Colega",
		'es-mx': "Pokochos Amigochos"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base ayant 70 PV ou moins et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon mit 70 oder weniger KP und lege sie auf deine Bank. Mische anschließend dein Deck.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base con 70 PS o meno e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos con 70 PS o menos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'pt-br': "Procure por até 2 Pokémon Básicos com 70 PS ou menos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos con 70 PS o menos y ponlos en tu Banca. Después, baraja tu mazo."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851238,
				tcgplayer: 654506
			}
		},
	],
}

export default card
