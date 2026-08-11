import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'fr-fr': "Magnéton",
		'en-us': "Magneton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Magnéti",
		'en-us': "Magnemite",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Boule Élek",
			'en-us': "Electro Ball",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725144,
				tcgplayer: 509826,
				cardtrader: 255624
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725144,
				tcgplayer: 509826,
				cardtrader: 255624
			}
		},
	],

	illustrator: "kurumitsu",

	
}

export default card
