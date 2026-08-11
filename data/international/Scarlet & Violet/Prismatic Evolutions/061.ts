import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'pt-br': "Sneasel",
		'it-it': "Sneasel",
		'de-de': "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'pt-br': "Golpe de Garra",
			'it-it': "Lacerartiglio",
			'de-de': "Klauenschlitzer"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",
	illustrator: "Kurata So",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805450,
				tcgplayer: 610416
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805450,
				tcgplayer: 610416
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806492,
				tcgplayer: 610579
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806493,
				tcgplayer: 610680
			}
		},
	],
}

export default card
