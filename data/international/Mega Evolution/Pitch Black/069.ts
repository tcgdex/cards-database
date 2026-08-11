import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
		'es-es': "Código Cero",
		'es-mx': "Código Cero",
		'de-de': "Typ:Null",
		'it-it': "Tipo Zero",
		'pt-br': "Tipo Nulo"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	dexId: [772],
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Power Edge",
			'fr-fr': "Lame Redoutable",
			'es-es': "Filo Poderoso",
			'es-mx': "Filo Poderoso",
			'de-de': "Kraftklinge",
			'it-it': "Colpotente",
			'pt-br': "Gume Poderoso"
		},

		cost: ["Colorless", "Colorless"],

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895853,
				tcgplayer: 704826
			}
		},
	],
}

export default card
