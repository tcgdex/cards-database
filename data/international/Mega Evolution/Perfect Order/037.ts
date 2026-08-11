import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [299],

	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'es-mx': "Nosepass",
		'de-de': "Nasgnet",
		'it-it': "Nosepass",
		'pt-br': "Nosepass"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Rolling Rocks",
			'fr-fr': "Rochers Roulants",
			'es-es': "Rocas Rodantes",
			'es-mx': "Rocas Rodantes",
			'de-de': "Rollende Steine",
			'it-it': "Massi Rotolanti",
			'pt-br': "Pedras Rolantes"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684422,
				cardmarket: 877451
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684422,
				cardmarket: 877451
			}
		}
	],

}

export default card
