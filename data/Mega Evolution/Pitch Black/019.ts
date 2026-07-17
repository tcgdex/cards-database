import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Brionne",
		fr: "Otarlette",
		es: "Brionne",
		'es-mx': "Brionne",
		de: "Marikeck"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [729],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Popplio"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hyper Voice"
		},

		cost: ["Water"],

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895807,
				tcgplayer: 704776
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895807,
				tcgplayer: 704776
			}
		},
	],
}

export default card
