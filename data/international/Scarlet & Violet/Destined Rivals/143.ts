import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [374],
	set: Set,

	name: {
		'en-us': "Steven's Beldum",
		'fr-fr': "Terhal de Pierre",
		'de-de': "Troys Tanhel",
		'it-it': "Beldum di Rocco",
		'es-es': "Beldum de Máximo",
		'pt-br': "Beldum do Steven",
		'es-mx': "Beldum de Steven"
	},


	illustrator: "Takeshi Nakamura",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'de-de': "Ramme",
			'it-it': "Carica",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'es-mx': "Colisión"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826017,
				tcgplayer: 632950
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826017,
				tcgplayer: 632950
			}
		},
	],
}

export default card
