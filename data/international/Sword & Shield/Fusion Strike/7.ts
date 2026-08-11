import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [511],
	set: Set,

	name: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Nagomi Nijo",

	description: {
		'en-us': "It's good at finding berries and gathers them from all over. It's kind enough to share them with friends."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'es-es': "Arañazo",
			'pt-br': "Arranhão",
			'it-it': "Graffio"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582035,
				tcgplayer: 253077
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582035,
				tcgplayer: 253077
			}
		},
	],
}

export default card
