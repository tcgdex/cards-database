import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'de-de': "Tentagra",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'es-mx': "Toedscool"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spray Fluid",
			'fr-fr': "Fluide Éclaboussant",
			'es-es': "Fluido Rociado",
			'de-de': "Sprühwasser",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'es-mx': "Rociar Líquido"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "osare",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817240,
				tcgplayer: 623515
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817240,
				tcgplayer: 623515
			}
		},
	],
}

export default card
