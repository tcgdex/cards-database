import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'es-mx': "Snorunt",
		'de-de': "Schneppke",
		'it-it': "Snorunt",
		'pt-br': "Snorunt"
	},

	illustrator: "Wintr Wandr",
	rarity: "Common",
	category: "Pokemon",
	dexId: [361],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Chilly",
			'fr-fr': "Glacial",
			'es-es': "Fresquito",
			'es-mx': "Frialdad",
			'de-de': "Frösteln",
			'it-it': "Addiaccio",
			'pt-br': "Frio"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "In some snowy lands, certain folklore says a house will prosper if a Snorunt lives there.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869657,
			tcgplayer: 675858
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870212,
			tcgplayer: 676890
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870211,
			tcgplayer: 677030
		}
	},
],
}

export default card
