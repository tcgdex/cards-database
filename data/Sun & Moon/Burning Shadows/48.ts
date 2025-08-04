import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		it: "Slowking",
		pt: "Slowking",
		de: "Laschoking"
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
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Drift Ashore",
				fr: "À la Dérive",
				es: "Orillar",
				it: "Spiaggiamento",
				pt: "Flutuar à Costa",
				de: "Anschwemmen"
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Unarmed",
				fr: "Désarmé",
				es: "Desarmado",
				it: "Inerme",
				pt: "Desarmado",
				de: "Wehrlos"
			},
			effect: {
				en: "If you have no cards in your hand, ignore all Energy in this attack’s cost.",
				fr: "Si vous n’avez aucune carte dans votre main, ignorez toute l’Énergie dans le coût de cette attaque.",
				es: "Si no tienes ninguna carta en tu mano, ignora todas las Energías en el coste de este ataque.",
				it: "Se non hai carte in mano, ignora tutte le Energie necessarie per usare questo attacco.",
				pt: "Se você não possuir cartas na sua mão, ignore todas as Energias no custo deste ataque.",
				de: "Wenn du keine Karten auf deiner Hand hast, ignoriere alle Energien in den Kosten dieser Attacke."
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

	thirdParty: {
		cardmarket: 299452,
		tcgplayer: 138530
	}
}

export default card
