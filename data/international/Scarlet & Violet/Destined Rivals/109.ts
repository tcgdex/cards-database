import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		'en-us': "Arven's Toedscool",
		'fr-fr': "Terracool de Pepper",
		'de-de': "Peppers Tentagra",
		'it-it': "Toedscool di Pepe",
		'es-es': "Toedscool de Damián",
		'pt-br': "Toedscool do Arven",
		'es-mx': "Toedscool de Damián"
	},


	illustrator: "Fujimoto Gold",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slight Intrusion",
			'fr-fr': "Légère Intrusion",
			'de-de': "Vorwagen",
			'it-it': "Coinvolgimento",
			'es-es': "Ligera Intromisión",
			'pt-br': "Leve Invasão",
			'es-mx': "Algo Metiche"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825983,
				tcgplayer: 632917
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825983,
				tcgplayer: 632917
			}
		},
	],
}

export default card
