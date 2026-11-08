import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [495],

	name: {
		'en-us': "Snivy",
		'fr-fr': "Vipélierre",
		'es-es': "Snivy",
		'es-mx': "Snivy",
		'de-de': "Serpifeu",
		'it-it': "Snivy",
		'pt-br': "Snivy"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável"
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

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684400,
				cardmarket: 877416
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684400,
				cardmarket: 877416
			}
		}
	],

}

export default card
