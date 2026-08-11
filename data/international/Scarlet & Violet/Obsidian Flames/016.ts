import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [761],
	set: Set,

	name: {
		'fr-fr': "Croquine",
		'en-us': "Bounsweet",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Attaque Imprudente",
			'en-us': "Reckless Charge",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Its sweat is sweet, like syrup made from boiled-down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725096,
				tcgplayer: 509734,
				cardtrader: 255576
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725096,
				tcgplayer: 509734,
				cardtrader: 255576
			}
		},
	],

	illustrator: "Kurata So",

	
}

export default card
