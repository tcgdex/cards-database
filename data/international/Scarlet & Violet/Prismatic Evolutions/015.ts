import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [667],
	set: Set,

	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'pt-br': "Litleo",
		'it-it': "Litleo",
		'de-de': "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'pt-br': "Combustão",
			'it-it': "Fuoco Continuo",
			'de-de': "Glühen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta",
			'de-de': "Kopfnuss"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Whisker",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805404,
				tcgplayer: 610370
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805404,
				tcgplayer: 610370
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806428,
				tcgplayer: 610546
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806429,
				tcgplayer: 610647
			}
		},
	],
}

export default card
