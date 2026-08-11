import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		'es-es': "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta un'Energia base da uno dei tuoi Pokémon a un altro.",
		'pt-br': "Mova 1 Energia básica de 1 dos seus Pokémon para outro Pokémon seu.",
		'de-de': "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691848,
				tcgplayer: 478178
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691848,
				tcgplayer: 478178
			}
		},
	],
}

export default card
