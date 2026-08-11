import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
		'de-de': "Panekon"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cocoon Collector",
				'fr-fr': "Collectionneur de Cocons",
				'es-es': "Colección de Crisálidas",
				'it-it': "Collezionista di Crisalidi",
				'pt-br': "Colecionador de Casulos",
				'de-de': "Kokonsammler"
			},
			effect: {
				'en-us': "Search your deck for up to 4 in any combination of Silcoon and Cascoon and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez une combinaison d’un maximum de 4 Armulys et Blindalys dans votre deck, et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 4 Silcoon y Cascoon, en cualquier combinación, y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a quattro Silcoon e Cascoon in qualsiasi combinazione e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 4 Silcoon e Cascoon no seu baralho em qualquer combinação e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 4 Schaloko und Panekon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback.",
	},

	thirdParty: {
		cardmarket: 365666,
		tcgplayer: 178828
	}
}

export default card
