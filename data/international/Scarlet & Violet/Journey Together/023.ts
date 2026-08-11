import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'es-es': "Combusken",
		'de-de': "Jungglut",
		'it-it': "Combusken",
		'pt-br': "Combusken",
		'es-mx': "Combusken"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'de-de': "Flemmli",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'es-mx': "Torchic"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'de-de': "Schlitzer",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Fujimoto Gold",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817175,
				tcgplayer: 623450
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817175,
				tcgplayer: 623450
			}
		},
	],
}

export default card
