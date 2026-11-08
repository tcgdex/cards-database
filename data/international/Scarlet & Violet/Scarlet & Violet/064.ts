import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Explosion",
			'fr-fr': "Explosion",
			'es-es': "Explosión",
			'it-it': "Esplosione",
			'pt-br': "Explosão",
			'de-de': "Explosion"
		},

		effect: {
			'en-us': "This Pokémon also does 90 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 90 dégâts.",
			'es-es': "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 90 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Shiburingaru",

	description: {
		'en-us': "They're formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
	},

	thirdParty: {
        cardmarket: 702360,
        tcgplayer: 487917
    }
}

export default card