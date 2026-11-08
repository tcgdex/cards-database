import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'es-mx': "Togepi",
		'de-de': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [175],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'es-mx': "Destructor",
			'de-de': "Klaps",
			'it-it': "Botta",
			'pt-br': "Pancada"
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

	description: {
		'en-us': "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869691,
			tcgplayer: 675892
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870260,
			tcgplayer: 676914
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870259,
			tcgplayer: 677054
		}
	},
],
}

export default card
