import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "EnergieUmschalter"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		cardmarket: 282777,
		tcgplayer: 98145
	}
}

export default card
