import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		509,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cleaning Up",
				fr: "Nettoyage",
				es: "Purgar",
				it: "Pulizie",
				pt: "Limpar",
				de: "Putzen"
			},
			effect: {
				en: "Discard a Pokémon Tool card from 1 of your opponent’s Pokémon.",
				fr: "Défaussez une carte Outil Pokémon de l’un des Pokémon de votre adversaire.",
				es: "Descarta 1 carta de Herramienta Pokémon de 1 de los Pokémon de tu rival.",
				it: "Scarta una carta Oggetto Pokémon assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Descarte 1 carta de Ferramenta Pokémon de 1 dos Pokémon do seu oponente.",
				de: "Lege 1 Pokémon-Ausrüstung von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
