import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		'fr-fr': "Magnéti",
		'en-us': "Magnemite",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Décharge Mineure",
			'en-us': "Tiny Charge",
			'es-es': "Carga Diminuta",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina",
			'de-de': "Mini-Stromstoß"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Grosse Explosion",
			'en-us': "Big Explosion",
			'es-es': "Gran Explosión",
			'it-it': "Grande Esplosione",
			'pt-br': "Grande Explosão",
			'de-de': "Große Explosion"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 60 dégâts.",
			'en-us': "This Pokémon also does 60 damage to itself.",
			'es-es': "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 60 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733676,
				tcgplayer: 516648,
				cardtrader: 261193
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733676,
				tcgplayer: 516648,
				cardtrader: 261193
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
