import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [548],
	set: Set,

	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682048,
				tcgplayer: 451629
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682048,
				tcgplayer: 451629
			}
		},
	],
}

export default card
