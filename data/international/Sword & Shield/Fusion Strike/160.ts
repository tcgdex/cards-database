import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar",
		'es-es': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
		'de-de': "Galar-Geradaks"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Galarian Zigzagoon",
		'fr-fr': "Zigzaton de Galar",
		'es-es': "Zigzagoon de Galar",
		'it-it': "Zigzagoon di Galar",
		'pt-br': "Zigzagoon de Galar",
		'de-de': "Galar-Zigzachs"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		'en-us': "This very aggressive Pokémon will recklessly challenge opponents stronger than itself."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'it-it': "Retrocalcio"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582788,
				tcgplayer: 253374
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582788,
				tcgplayer: 253374
			}
		},
	],
}

export default card
