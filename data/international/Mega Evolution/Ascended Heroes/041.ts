import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'es-mx': "Totodile",
		'de-de': "Karnimani",
		'it-it': "Totodile",
		'pt-br': "Totodile"
	},

	illustrator: "REND",
	rarity: "Common",
	category: "Pokemon",
	dexId: [158],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Slight Intrusion",
			'fr-fr': "Légère Intrusion",
			'es-es': "Ligera Intromisión",
			'es-mx': "Algo Metiche",
			'de-de': "Vorwagen",
			'it-it': "Coinvolgimento",
			'pt-br': "Leve Invasão"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It is small but rough and tough. It won't hesitate to take a bite out of anything that moves.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869652,
			tcgplayer: 675853
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870204,
			tcgplayer: 676886
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870203,
			tcgplayer: 677026
		}
	},
	{
		type: "holo",
		foil: "cosmos",
		thirdParty: {
			cardmarket: 878076,
			tcgplayer: 680710
		}
	},
],
}

export default card
