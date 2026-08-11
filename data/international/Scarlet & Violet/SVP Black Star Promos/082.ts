import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [912],
	set: Set,

	name: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
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
	regulationMark: "G",
	illustrator: "GIDORA",
	description: {
		'en-us': "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751807,
				tcgplayer: 537974
			},
		}
	],
}

export default card
