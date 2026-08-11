import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [84],
	set: Set,

	name: {
		'fr-fr': "Doduo",
		'en-us': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733679,
				tcgplayer: 516653,
				cardtrader: 261109
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733679,
				tcgplayer: 516653,
				cardtrader: 261109
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
