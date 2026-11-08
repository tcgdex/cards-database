import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [944],
	set: Set,

	name: {
		'en-us': "Shroodle",
		'fr-fr': "Gribouraigne",
		'es-es': "Shroodle",
		'it-it': "Shroodle",
		'pt-br': "Shroodle",
		'de-de': "Sproxi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

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
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794463,
				tcgplayer: 590047
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794463,
				tcgplayer: 590047
			}
		},
	],

	illustrator: "Yukiko Baba",

}

export default card
