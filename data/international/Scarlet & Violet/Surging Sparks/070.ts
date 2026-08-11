import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [175],
	set: Set,

	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794359,
				tcgplayer: 590079
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794359,
				tcgplayer: 590079
			}
		},
	],

	illustrator: "Yoko Hishida",
	
}

export default card
