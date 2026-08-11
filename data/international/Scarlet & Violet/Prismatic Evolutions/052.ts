import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [449],
	set: Set,

	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'pt-br': "Hippopotas",
		'it-it': "Hippopotas",
		'de-de': "Hippopotas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione",
			'de-de': "Tackle"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "HYOGONOSUKE",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805441,
				tcgplayer: 610407
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805441,
				tcgplayer: 610407
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806480,
				tcgplayer: 610573
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806481,
				tcgplayer: 610674
			}
		},
	],
}

export default card
