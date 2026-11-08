import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'de-de': "Leufeo",
		'it-it': "Litleo",
		'es-es': "Litleo",
		'pt-br': "Litleo",
		'es-mx': "Litleo"
	},

	illustrator: "Teeziro",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [667],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'es-es': "Llama",
			'pt-br': "Chama",
			'es-mx': "Llama"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851210,
				tcgplayer: 654478
			}
		},
	],
}

export default card
