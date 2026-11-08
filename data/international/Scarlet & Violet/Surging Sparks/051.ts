import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [913],
	set: Set,

	name: {
		'en-us': "Quaxwell",
		'fr-fr': "Canarbello",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague",
			'es-es': "Filo Agua",
			'it-it': "Acquataglio",
			'pt-br': "Aqua Gume",
			'de-de': "Aquaschneide"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794317,
				tcgplayer: 590032
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794317,
				tcgplayer: 590032
			}
		},
	],

	illustrator: "OKACHEKE",
	
}

export default card
