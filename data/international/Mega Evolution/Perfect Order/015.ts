import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [757],

	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'es-mx': "Salandit",
		'de-de': "Molunk",
		'it-it': "Salandit",
		'pt-br': "Salandit"
	},

	illustrator: "Kazuhisa Uragami",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'es-es': "Garras de Fuego",
			'es-mx': "Garras de Fuego",
			'de-de': "Feuerkrallen",
			'it-it': "Artigli Infuocati",
			'pt-br': "Garras de Fogo"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684382,
				cardmarket: 877427
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684382,
				cardmarket: 877427
			}
		}
	],

}

export default card
