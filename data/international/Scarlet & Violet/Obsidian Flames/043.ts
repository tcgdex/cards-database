import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

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
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poing Léger",
			'en-us': "Light Punch",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Fournaise",
			'en-us': "Combustion",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725123,
				tcgplayer: 509755,
				cardtrader: 255603
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725123,
				tcgplayer: 509755,
				cardtrader: 255603
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
