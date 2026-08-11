import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [846],
	set: Set,

	name: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'de-de': "Pikuda",
		'it-it': "Arrokuda",
		'es-es': "Arrokuda",
		'pt-br': "Arrokuda",
		'es-mx': "Arrokuda"
	},


	illustrator: "OKUBO",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'es-es': "Carga Descuidada",
			'pt-br': "Carga Indomável",
			'es-mx': "Carga Temeraria"
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
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825936,
				tcgplayer: 632875
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825936,
				tcgplayer: 632875
			}
		},
	],
}

export default card
