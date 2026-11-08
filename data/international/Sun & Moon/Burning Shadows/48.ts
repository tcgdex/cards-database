import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Slowking",
		'fr-fr': "Roigada",
		'es-es': "Slowking",
		'it-it': "Slowking",
		'pt-br': "Slowking",
		'de-de': "Laschoking"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Drift Ashore",
				'fr-fr': "À la Dérive",
				'es-es': "Orillar",
				'it-it': "Spiaggiamento",
				'pt-br': "Flutuar à Costa",
				'de-de': "Anschwemmen"
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Unarmed",
				'fr-fr': "Désarmé",
				'es-es': "Desarmado",
				'it-it': "Inerme",
				'pt-br': "Desarmado",
				'de-de': "Wehrlos"
			},
			effect: {
				'en-us': "If you have no cards in your hand, ignore all Energy in this attack’s cost.",
				'fr-fr': "Si vous n’avez aucune carte dans votre main, ignorez toute l’Énergie dans le coût de cette attaque.",
				'es-es': "Si no tienes ninguna carta en tu mano, ignora todas las Energías en el coste de este ataque.",
				'it-it': "Se non hai carte in mano, ignora tutte le Energie necessarie per usare questo attacco.",
				'pt-br': "Se você não possuir cartas na sua mão, ignore todas as Energias no custo deste ataque.",
				'de-de': "Wenn du keine Karten auf deiner Hand hast, ignoriere alle Energien in den Kosten dieser Attacke."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A poisonous bite reacted with its system, blessing it with the enhanced intellect of a genius. It has full control of its psychic powers.",
	},

	thirdParty: {
		cardmarket: 299452,
		tcgplayer: 138530
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
