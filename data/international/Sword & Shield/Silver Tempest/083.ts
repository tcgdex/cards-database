import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [684],
	set: Set,

	name: {
		'en-us': "Swirlix",
		'fr-fr': "Sucroquin",
		'es-es': "Swirlix",
		'it-it': "Swirlix",
		'pt-br': "Swirlix",
		'de-de': "Flauschling"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
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
	regulationMark: "F",


	description: {
		'en-us': "It eats its own weight in sugar every day. If it doesn't get enough sugar, it becomes incredibly grumpy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682130,
				tcgplayer: 451737
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682130,
				tcgplayer: 451737
			}
		},
	],
}

export default card
