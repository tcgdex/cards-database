import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [48],
	set: Set,

	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
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
	regulationMark: "F",


	description: {
		'en-us': "Lives in the shadows of tall trees where it eats bugs. It is attracted by light at night.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682040,
				tcgplayer: 451620
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682040,
				tcgplayer: 451620
			}
		},
	],
}

export default card
