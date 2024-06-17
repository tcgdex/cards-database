import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [483],
	name: {
		en: "Dialga",
		fr: "Dialga",
		es: "Dialga",
		it: "Dialga",
		pt: "Dialga",
		de: "Dialga"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rewind Time",
				fr: "Saut Temporel",
				es: "Rebobinar Tiempo",
				it: "Tempo Riavvolto",
				pt: "Regressar no Tempo",
				de: "Zurückdrehen der Zeit"
			},
			effect: {
				en: "Attach up to 2 Metal Energy cards from your discard pile to 1 of your Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie Metal de votre pile de défausse à l'un de vos Pokémon.",
				es: "Une hasta 2 cartas de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia Metal dalla tua pila degli scarti.",
				pt: "Ligue até 2 cartas de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Lege bis zu 2 Metal-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Flash of Destruction",
				fr: "Flash de Destruction",
				es: "Destello de Destrucción",
				it: "Bagliore Distruttivo",
				pt: "Clarão da Destruição",
				de: "Zerstörungsblitz"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	}
}

export default card
