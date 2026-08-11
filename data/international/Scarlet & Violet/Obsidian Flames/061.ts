import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [963],
	set: Set,

	name: {
		'fr-fr': "Dofin",
		'en-us': "Finizen",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Coup de Queue",
			'en-us': "Tail Smack",
			'es-es': "Bofetón Cola",
			'it-it': "Codasberla",
			'pt-br': "Ataque de Cauda",
			'de-de': "Schweifschlag"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It likes playing with others of its kind using the water ring on its tail. It uses ultrasonic waves to sense the emotions of other living creatures.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725141,
				tcgplayer: 509816,
				cardtrader: 255621
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725141,
				tcgplayer: 509816,
				cardtrader: 255621
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
