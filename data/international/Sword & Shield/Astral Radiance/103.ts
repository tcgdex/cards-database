import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [827],
	set: Set,

	name: {
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658764,
				tcgplayer: 272304
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658764,
				tcgplayer: 272304
			}
		},
	],
}

export default card
