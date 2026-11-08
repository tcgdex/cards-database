import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yuu Nishida",
	category: "Pokemon",

	description: {
		'en-us': "Its upper whiskers are sensors that survey its surroundings. Its lower whiskers are organs that shoot electricity."
	},

	stage: "Basic",

	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'de-de': "Dedenne",
		'es-es': "Dedenne",
		'pt-br': "Dedenne",
		'it-it': "Dedenne"
	},

	rarity: "Promo",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Mad Party",
			'fr-fr': "Folle Aventure",
			'de-de': "Verrückte Party",
			'es-es': "Merienda de Locos",
			'pt-br': "Festa Maluca",
			'it-it': "Festa di Matti"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 540626
	}
}

export default card
