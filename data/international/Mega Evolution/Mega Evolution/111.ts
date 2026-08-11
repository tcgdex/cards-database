import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'de-de': "Velursi",
		'it-it': "Stufful",
		'es-es': "Stufful",
		'pt-br': "Stufful",
		'es-mx': "Stufful"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [759],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'es-es': "Puño Ligero",
			'pt-br': "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'de-de': "Plumps",
			'it-it': "Tonfo",
			'es-es': "Vuelta",
			'pt-br': "Baque",
			'es-mx': "Desplome"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851182,
				tcgplayer: 654450
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851182,
				tcgplayer: 654450
			}
		},
	],
}

export default card
