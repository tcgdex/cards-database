import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'de-de': "Chelast",
		'it-it': "Turtwig",
		'es-es': "Turtwig",
		'pt-br': "Turtwig",
		'es-mx': "Turtwig"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",
	dexId: [387],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'it-it': "Foglielama",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 875189,
				tcgplayer: 684464
			}
		},
	],
}

export default card
