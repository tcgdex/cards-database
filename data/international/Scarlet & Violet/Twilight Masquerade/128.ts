import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [885],
	set: Set,

	name: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
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
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho",
			'de-de': "Mini-Groll"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It has a habit of biting at Clauncher even though it doesn't feed on them. This is said to be vestigial behavior from when Dreepy was alive.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769302,
				tcgplayer: 550172
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769302,
				tcgplayer: 550172
			}
		},
	],

	illustrator: "Scav",

}

export default card