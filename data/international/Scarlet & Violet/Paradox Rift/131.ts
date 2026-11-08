import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [679],
	set: Set,

	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

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
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The blue eye on the sword's handguard is the true body of Honedge. With its old cloth, it drains people's lives away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740669,
				tcgplayer: 523808,
				cardtrader: 265246
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 784939
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740669,
				tcgplayer: 523808,
				cardtrader: 265246
			}
		},
	],

	illustrator: "Nagomi Nijo",

	
}

export default card
