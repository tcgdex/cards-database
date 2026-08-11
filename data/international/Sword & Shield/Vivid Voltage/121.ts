import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [483],

	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'es-es': "Dialga",
		'it-it': "Dialga",
		'pt-br': "Dialga",
		'de-de': "Dialga"
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
				'en-us': "Rewind Time",
				'fr-fr': "Saut Temporel",
				'es-es': "Rebobinar Tiempo",
				'it-it': "Tempo Riavvolto",
				'pt-br': "Regressar no Tempo",
				'de-de': "Zurückdrehen der Zeit"
			},
			effect: {
				'en-us': "Attach up to 2 Metal Energy cards from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie Metal de votre pile de défausse à l'un de vos Pokémon.",
				'es-es': "Une hasta 2 cartas de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon fino a due carte Energia Metal dalla tua pila degli scarti.",
				'pt-br': "Ligue até 2 cartas de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon.",
				'de-de': "Lege bis zu 2 Metal-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Flash of Destruction",
				'fr-fr': "Flash de Destruction",
				'es-es': "Destello de Destrucción",
				'it-it': "Bagliore Distruttivo",
				'pt-br': "Clarão da Destruição",
				'de-de': "Zerstörungsblitz"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie da questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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


	stage: "Basic",

	description: {
		'en-us': "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512315,
				tcgplayer: 226575
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512315,
				tcgplayer: 226575
			}
		},
	],
}

export default card
