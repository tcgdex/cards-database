import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buddy-Buddy Poffin",
		'fr-fr': "Poffin Copain-Copain",
		'es-es': "Pokochos Gemelos",
		'it-it': "Poffin del Cuore",
		'pt-br': "Poffin de Colega",
		'de-de': "Dicke-Freunde-Knursp"
	},

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck.",
		'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon de base ayant 70 PV ou moins et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos con 70 PS o menos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base con 70 PS o meno e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 Pokémon Básicos com 70 PS ou menos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon mit 70 oder weniger KP und lege sie auf deine Bank. Mische anschließend dein Deck."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 769397,
				tcgplayer: 550267
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card