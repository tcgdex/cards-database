import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'pt-br': "Exeggcute",
		'it-it': "Exeggcute",
		'de-de': "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'pt-br': "Aríete",
			'it-it': "Carica",
			'de-de': "Ramme"
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
	illustrator: "Iori Suzuki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805390,
				tcgplayer: 610356
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805390,
				tcgplayer: 610356
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806408,
				tcgplayer: 610536
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806409,
				tcgplayer: 610637
			}
		},
	],
}

export default card
