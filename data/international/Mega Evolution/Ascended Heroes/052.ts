import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'es-mx': "Snom",
		'de-de': "Snomnom",
		'it-it': "Snom",
		'pt-br': "Snom"
	},

	illustrator: "Izucch",
	rarity: "Common",
	category: "Pokemon",
	dexId: [872],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'es-es': "Témpano",
			'es-mx': "Témpano de Hielo",
			'de-de': "Eiszapfen",
			'it-it': "Stalattite",
			'pt-br': "Pingente de Gelo"
		},

		damage: 20
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
		'en-us': "Within its internal organs, Snom amplifies the frigid air it gets from eating snow and then uses this amplified air to create icicle-like spikes.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869663,
			tcgplayer: 675864
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870220,
			tcgplayer: 676894
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870219,
			tcgplayer: 677034
		}
	},
],
}

export default card
