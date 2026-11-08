import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'de-de': "Kupfanti",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'es-mx': "Cufant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'es-mx': "Rodada"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "kodama",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817261,
				tcgplayer: 623536
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817261,
				tcgplayer: 623536
			}
		},
	],
}

export default card
