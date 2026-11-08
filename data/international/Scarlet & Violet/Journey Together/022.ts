import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'de-de': "Flemmli",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'es-mx': "Torchic"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'es-mx': "Arañazo"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "OKACHEKE",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817174,
				tcgplayer: 623449
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817174,
				tcgplayer: 623449
			}
		},
	],
}

export default card
