import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'de-de': "Tannza",
		'it-it': "Pineco",
		'es-es': "Pineco",
		'pt-br': "Pineco",
		'es-mx': "Pineco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'de-de': "Herunterhängen",
			'it-it': "Tirar Giù",
			'es-es': "Prender",
			'pt-br': "Dependurar",
			'es-mx': "Colgadera"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825878,
				tcgplayer: 632832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825878,
				tcgplayer: 632832
			}
		},
	],

	illustrator: "YASHIRO Nanaco"
}

export default card
