import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spray Fluid",
			'fr-fr': "Fluide Éclaboussant",
			'es-es': "Fluido Rociado",
			'it-it': "Fluidospray",
			'pt-br': "Fluido Spray",
			'de-de': "Sprühwasser"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785865,
				tcgplayer: 567238
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785865,
				tcgplayer: 567238
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

}

export default card
