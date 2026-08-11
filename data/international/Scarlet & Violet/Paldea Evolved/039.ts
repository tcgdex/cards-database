import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		'fr-fr': "Charbambin",
		'en-us': "Charcadet",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Charbon Mutant",
			'en-us': "Live Coal",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Poing Magnum",
			'en-us': "Magnum Punch",
			'es-es': "Puño Mágnum",
			'it-it': "Superpugno",
			'pt-br': "Soco Magnum",
			'de-de': "Magnum-Schlag"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715513,
				tcgplayer: 497450,
				cardtrader: 248626
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715513,
				tcgplayer: 497450,
				cardtrader: 248626
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},
}

export default card
