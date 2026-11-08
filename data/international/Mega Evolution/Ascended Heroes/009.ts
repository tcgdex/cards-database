import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'es-es': "Bayleef",
		'es-mx': "Bayleef",
		'de-de': "Lorblatt",
		'it-it': "Bayleef",
		'pt-br': "Bayleef"
	},

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'es-es': "Chikorita",
		'es-mx': "Chikorita",
		'de-de': "Endivie",
		'it-it': "Chikorita",
		'pt-br': "Chikorita",
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [153],
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'es-mx': "Paso de Hoja",
			'de-de': "Blattschritt",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869620,
				tcgplayer: 675821
			}
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 870150,
				tcgplayer: 676859
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870149,
				tcgplayer: 676999
			}
		},
	],
}

export default card
