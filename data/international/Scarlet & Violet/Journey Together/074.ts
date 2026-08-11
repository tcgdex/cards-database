import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [868],
	set: Set,

	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'de-de': "Hokumil",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'es-mx': "Milcery"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
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
	illustrator: "Shibuzoh.",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817226,
				tcgplayer: 623501
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817226,
				tcgplayer: 623501
			}
		},
	],
}

export default card
