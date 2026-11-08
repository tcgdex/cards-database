import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'pt-br': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'de-de': "Pikachu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'it-it': "Codabotta",
			'de-de': "Schweifvertrimmer"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'pt-br': "Trovão",
			'it-it': "Tuono",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805417,
				tcgplayer: 610383
			}
		},
	],
}

export default card
