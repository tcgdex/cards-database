import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'es-es': "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta un'Energia base da uno dei tuoi Pokémon a un altro.",
		'pt-br': "Mova uma Energia básica de 1 dos seus Pokémon para outro dos seus Pokémon.",
		'de-de': "Verschiebe 1 an 1 deiner Pokémon angelegte Basis-Energie auf ein anderes deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281753,
		tcgplayer: 92270
	}
}

export default card
