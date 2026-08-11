import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [246],
	set: Set,

	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'pt-br': "Larvitar",
		'it-it': "Larvitar",
		'de-de': "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Shimaris Yukichi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805436,
				tcgplayer: 610402
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805436,
				tcgplayer: 610402
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806472,
				tcgplayer: 610569
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806473,
				tcgplayer: 610670
			}
		},
	],
}

export default card
