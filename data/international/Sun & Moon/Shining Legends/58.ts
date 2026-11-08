import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Damage Mover",
		'fr-fr': "Déplace Dégâts",
		'es-es': "Muevedaño",
		'it-it': "Iniettore Danni",
		'pt-br': "Movedor de Dano",
		'de-de': "Schadenstransporter"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez 3 marqueurs de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
		'en-us': "Move 3 damage counters from 1 of your Pokémon to another of your Pokémon.",
		'es-es': "Mueve 3 contadores de daño de 1 de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta tre segnalini danno da uno a un altro dei tuoi Pokémon.",
		'pt-br': "Mova 3 contadores de dano de 1 dos seus Pokémon para outro Pokémon seu.",
		'de-de': "Verschiebe 3 Schadensmarken von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 302195,
		tcgplayer: 146721
	}
}

export default card
