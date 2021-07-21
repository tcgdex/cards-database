import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Victory Sign",
				fr: "V de Victoire",
				es: "Señal de Victoria",
				it: "Segno di Vittoria",
				pt: "Sinal de Vitória",
				de: "Victoryzeichen"
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie de base de différents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia base di diversi tipi e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				it: "Fiammata",
				pt: "Chama",
				de: "Flackern"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
