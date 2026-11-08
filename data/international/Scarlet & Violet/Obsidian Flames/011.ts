import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [708],
	set: Set,

	name: {
		'fr-fr': "Brocélôme",
		'en-us': "Phantump",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tapotige",
			'en-us': "Branch Poke",
			'es-es': "Punzada Rama",
			'it-it': "Ramostoccata",
			'pt-br': "Cutucada com Galho",
			'de-de': "Zweigstoß"
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
	regulationMark: "G",

	description: {
		'en-us': "With a voice like a human child's, it cries out to lure adults deep into the forest, getting them lost among the trees.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725091,
				tcgplayer: 509671,
				cardtrader: 255571
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725091,
				tcgplayer: 509671,
				cardtrader: 255571
			}
		},
	],

	illustrator: "Narumi Sato",

	
}

export default card
