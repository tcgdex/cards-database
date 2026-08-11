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

	illustrator: "Gemi",
	rarity: "Illustration rare",
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
			type: "holo",
			thirdParty: {
				cardmarket: 895871,
				tcgplayer: 704844
			}
		},
	],
}

export default card
