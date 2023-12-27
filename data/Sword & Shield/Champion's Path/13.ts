import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Wailord V",
		fr: "Wailord V",
		es: "Wailord V",
		it: "Wailord V",
		pt: "Wailord V",
		de: "Wailord V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
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
				en: "Draw Up",
				fr: "Puiser",
				es: "Alzar",
				it: "Pesca Alta",
				pt: "Erguer",
				de: "Schöpfen"
			},
			effect: {
				en: "Attach up to 3 Water Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez jusqu'à 3 cartes Énergie Water de votre pile de défausse à ce Pokémon.",
				es: "Une hasta 3 cartas de Energía Water de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon fino a tre carte Energia Water dalla tua pila degli scarti.",
				pt: "Ligue até 3 cartas de Energia Water da sua pilha de descarte a este Pokémon.",
				de: "Lege bis zu 3 Water-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Ocean Waves",
				fr: "Vagues Océaniques",
				es: "Olas Oceánicas",
				it: "Onde Oceaniche",
				pt: "Ondas Oceânicas",
				de: "Ozeanwellen"
			},
			effect: {
				en: "Flip 3 coins. This attack does 120 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 120 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 120 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
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
	suffix: "V"
}

export default card
