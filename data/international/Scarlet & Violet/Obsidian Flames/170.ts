import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		'fr-fr': "Ponchiot",
		'en-us': "Lillipup",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ruade",
			'en-us': "Rear Kick",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
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
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is far brighter than the average child, and Lillipup won't forget the love it receives or any abuse it suffers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725250,
				tcgplayer: 509707,
				cardtrader: 256066
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725250,
				tcgplayer: 509707,
				cardtrader: 256066
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
