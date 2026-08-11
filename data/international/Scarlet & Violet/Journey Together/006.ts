import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [548],
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'de-de': "Lilminip",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'es-mx': "Petilil"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Leaf Step",
			'fr-fr': "Enjambée de Feuillage",
			'es-es': "Paso Hoja",
			'de-de': "Blattschritt",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'es-mx': "Paso de Hoja"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Shibuzoh.",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817158,
				tcgplayer: 623433
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817158,
				tcgplayer: 623433
			}
		},
	],
}

export default card
