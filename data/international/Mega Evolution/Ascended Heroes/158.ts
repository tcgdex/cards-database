import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'es-mx': "Dreepy",
		'de-de': "Grolldra",
		'it-it': "Dreepy",
		'pt-br': "Dreepy"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [885],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			'de-de': "Mini-Groll",
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It has a habit of biting at Clauncher even though it doesn’t feed on them. This is said to be vestigial behavior from when Dreepy was alive.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869769,
			tcgplayer: 675970
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870384,
			tcgplayer: 676976
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870383,
			tcgplayer: 677116
		}
	},
],
}

export default card
