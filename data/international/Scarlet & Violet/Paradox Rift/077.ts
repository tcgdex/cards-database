import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [710],
	set: Set,

	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The light that streams out from the holes in the pumpkin can hypnotize and control the people and Pokémon that see it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740569,
				tcgplayer: 523743,
				cardtrader: 265186
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740569,
				tcgplayer: 523743,
				cardtrader: 265186
			}
		},
	],

	illustrator: "saino misaki",

	
}

export default card
