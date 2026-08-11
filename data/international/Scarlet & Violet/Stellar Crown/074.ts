import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [111],
	set: Set,

	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'de-de': "Hornattacke"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785928,
				tcgplayer: 567300
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785928,
				tcgplayer: 567300
			}
		},
	],

	illustrator: "kodama",

}

export default card
