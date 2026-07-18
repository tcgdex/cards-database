import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		'es-mx': "Mankey",
		de: "Menki",
		it: "Mankey",
		pt: "Mankey"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			'es-mx': "Patada Baja",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira"
		},

		cost: ["Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
	],
}

export default card
