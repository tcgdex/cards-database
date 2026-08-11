import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Wailord V",
		'fr-fr': "Wailord V",
		'es-es': "Wailord V",
		'it-it': "Wailord V",
		'pt-br': "Wailord V",
		'de-de': "Wailord V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [321],
	set: Set,
	hp: 280,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Draw Up",
				'fr-fr': "Puiser",
				'es-es': "Alzar",
				'it-it': "Pesca Alta",
				'pt-br': "Erguer",
				'de-de': "Schöpfen"
			},
			effect: {
				'en-us': "Attach up to 3 Water Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez jusqu'à 3 cartes Énergie Water de votre pile de défausse à ce Pokémon.",
				'es-es': "Une hasta 3 cartas de Energía Water de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon fino a tre carte Energia Water dalla tua pila degli scarti.",
				'pt-br': "Ligue até 3 cartas de Energia Water da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege bis zu 3 Water-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Ocean Waves",
				'fr-fr': "Vagues Océaniques",
				'es-es': "Olas Oceánicas",
				'it-it': "Onde Oceaniche",
				'pt-br': "Ondas Oceânicas",
				'de-de': "Ozeanwellen"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 120 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
			},
			damage: "120×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499920,
		tcgplayer: 223008
	}
}

export default card
