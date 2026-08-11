import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [659],
	set: Set,

	name: {
		'fr-fr': "Sapereau",
		'en-us': "Bunnelby",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Folle Aventure",
			'en-us': "Mad Party",
			'es-es': "Merienda de Locos",
			'it-it': "Festa di Matti",
			'pt-br': "Festa Maluca",
			'de-de': "Verrückte Party"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
			'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
			'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539873,
				tcgplayer: 232485
			}
		},
	],
}

export default card
