import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [833],
	set: Set,

	name: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785897,
				tcgplayer: 567269
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785897,
				tcgplayer: 567269
			}
		},
	],

	illustrator: "Yuka Morii",

}

export default card
