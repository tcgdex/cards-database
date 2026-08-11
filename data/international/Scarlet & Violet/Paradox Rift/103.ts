import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [933],
	set: Set,

	name: {
		'en-us': "Naclstack",
		'fr-fr': "Amassel",
		'es-es': "Naclstack",
		'it-it': "Naclstack",
		'pt-br': "Naclstack",
		'de-de': "Sedisal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rocky Tackle",
			'fr-fr': "Tacle Rocailleux",
			'es-es': "Placaje Rocoso",
			'it-it': "Azione Rocciosa",
			'pt-br': "Investida Pedregosa",
			'de-de': "Steiniger Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey's body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740617,
				tcgplayer: 523773,
				cardtrader: 265214
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740617,
				tcgplayer: 523773,
				cardtrader: 265214
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	
}

export default card
