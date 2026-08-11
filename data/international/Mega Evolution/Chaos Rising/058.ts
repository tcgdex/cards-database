import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Camouflaged as rotten kelp, this Pokemon sprays liquid poison to take down prey that approach unawares.",
	},


	name: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'es-mx': "Skrelp",
		'de-de': "Algitt",
		'it-it': "Skrelp",
		'pt-br': "Skrelp"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [690],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'es-mx': "Gancho",
			'de-de': "Haken",
			'it-it': "Uncino",
			'pt-br': "Gancho"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886450,
				tcgplayer: 693543
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886450,
				tcgplayer: 693543
			}
		},
	],
}

export default card
