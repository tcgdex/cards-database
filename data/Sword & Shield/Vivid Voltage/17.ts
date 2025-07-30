import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [672],

	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
		es: "Skiddo",
		it: "Skiddo",
		pt: "Skiddo",
		de: "Mähikel"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Synthesis",
				fr: "Synthèse",
				es: "Síntesis",
				it: "Sintesi",
				pt: "Síntese",
				de: "Synthese"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Énergie Grass, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Grass y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Grass e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Grass no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Grass-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it has sunshine and water, it doesn't need to eat, because it can generate energy from the leaves on its back."
	},

	thirdParty: {
		cardmarket: 511505
	}
}

export default card
