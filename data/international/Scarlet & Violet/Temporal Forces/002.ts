import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [204],
	set: Set,

	name: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'es-es': "Pineco",
		'it-it': "Pineco",
		'pt-br': "Pineco",
		'de-de': "Tannza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It spits out a fluid that it uses to glue tree bark to its body. The fluid hardens when it touches air.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760632,
				tcgplayer: 542647
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760632,
				tcgplayer: 542647
			}
		},
	],

	illustrator: "Midori Harada",

}

export default card