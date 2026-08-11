import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'it-it': "Taglio",
			'pt-br': "Cortar",
			'de-de': "Zerschneider"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "AKIRA EGAWA",
	variants: [
		{
			type: "normal"
		}
	],
}

export default card
