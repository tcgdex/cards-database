import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Tag Switch",
		'fr-fr': "Échange d’Escouade",
		'es-es': "Cambio Relevo",
		'it-it': "Scambio Alleato",
		'pt-br': "Substituição de Aliados",
		'de-de': "Team-Wechsel"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Déplacez jusqu’à 2 Énergies de l’un de vos Pokémon ESCOUADE vers un autre de vos Pokémon.",
		'en-us': "Move up to 2 Energy from 1 of your TAG TEAM Pokémon to another of your Pokémon.",
		'es-es': "Mueve hasta 2 Energías de 1 de tus Pokémon de equipo de RELEVOS a otro de tus Pokémon.",
		'it-it': "Sposta fino a due Energie da uno dei tuoi Pokémon ALLEATI a un altro dei tuoi Pokémon.",
		'pt-br': "Mova até 2 Energias de 1 dos seus Pokémon ALIADOS para outro Pokémon seu.",
		'de-de': "Verschiebe bis zu 2 Energien von 1 deiner TAG TEAM Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 388832,
		tcgplayer: 195266
	}
}

export default card
