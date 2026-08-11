import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [755],
	set: Set,

	name: {
		'en-us': "Morelull",
		'fr-fr': "Spododo",
		'es-es': "Morelull",
		'it-it': "Morelull",
		'pt-br': "Morelull",
		'de-de': "Bubungus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Attach",
			'fr-fr': "Accrochage",
			'es-es': "Pegarse",
			'it-it': "Appiccicoso",
			'pt-br': "Conectar",
			'de-de': "Festkleben"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794263,
				tcgplayer: 590009
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794263,
				tcgplayer: 590009
			}
		},
	],

	illustrator: "Tomokazu Komiya",
	
}

export default card
