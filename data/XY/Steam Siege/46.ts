import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	},
	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		425,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Transfer Pain",
				fr: "Transfert de Douleur",
				es: "Transferir Dolor",
				it: "Spostafflitto",
				pt: "Transferir Dor",
				de: "Schmerztransfer"
			},
			effect: {
				en: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent’s Pokémon.",
				fr: "Déplacez 1 marqueur de dégâts de l’un de vos Pokémon vers l’un des Pokémon de votre adversaire.",
				es: "Mueve 1 contador de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
				it: "Sposta un segnalino danno da uno dei tuoi Pokémon a uno dei Pokémon del tuo avversario.",
				pt: "Mova 1 contador de danos de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
				de: "Verschiebe 1 Schadensmarke von 1 deiner Pokémon auf 1 Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
