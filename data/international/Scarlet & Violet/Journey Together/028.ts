import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [636],
	set: Set,

	name: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille",
		'es-es': "Larvesta",
		'de-de': "Ignivor",
		'it-it': "Larvesta",
		'pt-br': "Larvesta",
		'es-mx': "Larvesta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'de-de': "Irrlicht",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'es-mx': "Fuego Fatuo"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Kyoko Umemoto",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817180,
				tcgplayer: 623455
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817180,
				tcgplayer: 623455
			}
		},
	],
}

export default card
