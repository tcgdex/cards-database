import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [885],
	set: Set,

	name: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'pt-br': "Dreepy",
		'it-it': "Dreepy",
		'de-de': "Grolldra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'pt-br': "Rancinho",
			'it-it': "Rancormeschino",
			'de-de': "Mini-Groll"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso",
			'de-de': "Biss"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Scav",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805460,
				tcgplayer: 610426
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805460,
				tcgplayer: 610426
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806510,
				tcgplayer: 610588
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806511,
				tcgplayer: 610689
			}
		},
	],
}

export default card
