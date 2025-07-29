import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
		es: "Silcoon",
		it: "Silcoon",
		pt: "Silcoon",
		de: "Schaloko"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cocoon Collector",
				fr: "Collectionneur de Cocons",
				es: "Colección de Crisálidas",
				it: "Collezionista di Crisalidi",
				pt: "Colecionador de Casulos",
				de: "Kokonsammler"
			},
			effect: {
				en: "Search your deck for up to 4 in any combination of Silcoon and Cascoon and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez une combinaison d’un maximum de 4 Armulys et Blindalys dans votre deck, et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 4 Silcoon y Cascoon, en cualquier combinación, y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a quattro Silcoon e Cascoon in qualsiasi combinazione e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 4 Silcoon e Cascoon no seu baralho em qualquer combinação e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 4 Schaloko und Panekon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Rolling Tackle",
				fr: "Roulé-Boulé",
				es: "Placaje Giro",
				it: "Rollazione",
				pt: "Golpe de Colisão Rolante",
				de: "Rolltackle"
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

	retreat: 3,

	thirdParty: {
		cardmarket: 365664
	}
}

export default card
