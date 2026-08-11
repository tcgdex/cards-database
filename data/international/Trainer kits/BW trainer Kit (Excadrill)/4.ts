import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d’Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "Energie-Umschalter"
	},

	rarity: "None",
	category: "Trainer",
	illustrator: "Kent Kanetsuna",

	effect: {
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
		'es-es': "Mueve una Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta un’Energia base da uno dei tuoi Pokémon a un altro.",
		'pt-br': "Mova uma Energia básica de 1 dos seus Pokémon para outro dos seus Pokémon.",
		'de-de': "Verschiebe 1 an 1 deiner Pokémon angelegte Basis-Energie auf ein anderes deiner Pokémon."
	},

	trainerType: "Item",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280081,
				tcgplayer: 98684
			}
		},
	],

}

export default card
