import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'pt-br': "Rapidash",
		'de-de': "Gallopa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Inferno Onrush",
			'fr-fr': "Torrent d'Enfer",
			'es-es': "Infierno Desatado",
			'it-it': "Assalto Infernale",
			'pt-br': "Investida Infernal",
			'de-de': "Inferno-Ansturm"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760657,
				tcgplayer: 542771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760657,
				tcgplayer: 542771
			}
		},
	],

	illustrator: "Ryota Murayama",

}

export default card