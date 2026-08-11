import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d’Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'es-es': "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta un’Energia base da uno dei tuoi Pokémon a un altro.",
		'pt-br': "Mova 1 Energia básica de 1 dos seus Pokémon para outro Pokémon seu.",
		'de-de': "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361367,
		tcgplayer: 170990
	}
}

export default card
