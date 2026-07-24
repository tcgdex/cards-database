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

	illustrator: "Gemi",
	rarity: "Illustration rare",
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
			type: "holo",
			thirdParty: {
				cardmarket: 895871,
				tcgplayer: 704844
			}
		},
	],
}

export default card
