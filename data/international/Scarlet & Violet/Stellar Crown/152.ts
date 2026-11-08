import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [868],
	set: Set,

	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
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
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786006,
				tcgplayer: 567435
			}
		},
	],

	illustrator: "Dsuke",

}

export default card
