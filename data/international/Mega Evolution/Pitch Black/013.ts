import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'es-es': "Goldeen",
		'es-mx': "Goldeen",
		'de-de': "Goldini",
		'it-it': "Goldeen",
		'pt-br': "Goldeen"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'es-mx': "Perforar",
			'de-de': "Durchbohren",
			'it-it': "Perforare",
			'pt-br': "Perfurar"
		},

		cost: ["Colorless", "Colorless"],

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895801,
				tcgplayer: 704770
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895801,
				tcgplayer: 704770
			}
		},
	],
}

export default card
