import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz",
		'it-it': "Electrike",
		'es-es': "Electrike",
		'pt-br': "Electrike",
		'es-mx': "Electrike"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [309],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Jolt",
			'fr-fr': "Secousse Tonnerre",
			'de-de': "Donnerrüttler",
			'it-it': "Scoppiotuono",
			'es-es': "Sacudida Atronadora",
			'pt-br': "Choque do Trovão",
			'es-mx': "Choque Trueno"
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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851120,
				tcgplayer: 654388
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851120,
				tcgplayer: 654388
			}
		},
	],
}

export default card
