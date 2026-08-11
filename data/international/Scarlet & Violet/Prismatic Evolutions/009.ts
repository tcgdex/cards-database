import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [840],
	set: Set,

	name: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'pt-br': "Applin",
		'it-it': "Applin",
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
			'pt-br': "Fluido Spray",
			'it-it': "Fluidospray",
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
	illustrator: "Yoriyuki Ikegami",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805398,
				tcgplayer: 610364
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805398,
				tcgplayer: 610364
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806422,
				tcgplayer: 610543
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806423,
				tcgplayer: 610644
			}
		},
	],
}

export default card
