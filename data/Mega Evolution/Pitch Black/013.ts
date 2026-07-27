import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		'es-mx': "Goldeen",
		de: "Goldini",
		it: "Goldeen",
		pt: "Goldeen"
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
			en: "Pierce",
			fr: "Transpercement",
			es: "Perforar",
			'es-mx': "Perforar",
			de: "Durchbohren",
			it: "Perforare",
			pt: "Perfurar"
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
