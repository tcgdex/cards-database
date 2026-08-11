import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Parallel Placement",
			'fr-fr': "Placement Parallèle",
			'es-es': "Colocación Paralela",
			'it-it': "Disposizione in Parallelo",
			'pt-br': "Posicionamento Paralelo",
			'de-de': "Parallelschaltung"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Charjabug and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Chrysapile, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Charjabug y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Charjabug e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Charjabug no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Akkup und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785906,
				tcgplayer: 567278
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785906,
				tcgplayer: 567278
			}
		},
	],

	illustrator: "Makura Tami",

}

export default card
