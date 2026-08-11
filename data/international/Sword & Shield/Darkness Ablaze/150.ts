import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [659],

	name: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mad Party",
				'fr-fr': "Folle Aventure",
				'es-es': "Merienda de Locos",
				'it-it': "Festa di Matti",
				'pt-br': "Festa Maluca",
				'de-de': "Verrückte Party"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l'attaque Folle Aventure.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Merienda de Locos.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Festa di Matti.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque Festa Maluca.",
				'de-de': "Diese Attacke fügt für jedes Pokémon in deinem Ablagestapel, das die Attacke Verrückte Party hat, 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483629,
				tcgplayer: 219362
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483629,
				tcgplayer: 219362
			}
		},
		{
			type: 'reverse',
			stamp: ['player-rewards-program', 'thank-you'],
			thirdParty: {
				cardmarket: 845425
			}
		},
	],
}

export default card
