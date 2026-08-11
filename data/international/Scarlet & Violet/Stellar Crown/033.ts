import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [183],
	set: Set,

	name: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785887,
				tcgplayer: 567259
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785887,
				tcgplayer: 567259
			}
		},
	],

	illustrator: "MARINA Chikazawa",

}

export default card
