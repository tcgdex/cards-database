import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dark Cutter",
			'fr-fr': "Tranch'Obscur",
			'es-es': "Cuchilla Oscura",
			'it-it': "Oscurotaglio",
			'pt-br': "Cortador de Escuridão",
			'de-de': "Dunkler Zerschneider"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Double-Edged Slash",
			'fr-fr': "Double Tranchant",
			'es-es': "Cuchillada Doble Filo",
			'it-it': "Doppio Taglio",
			'pt-br': "Talho de Dois Gumes",
			'de-de': "Zweischneidiger Schlitzer"
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

	retreat: 1,
	regulationMark: "G",
	illustrator: "Hideki Ishikawa",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
	},

	thirdParty: {
        cardmarket: 702428,
        tcgplayer: 488023
    }
}

export default card