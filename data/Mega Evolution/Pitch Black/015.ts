import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		'es-mx': "Wailmer",
		de: "Wailmer"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [320],
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun"
		},

		cost: ["Water", "Water"],

		damage: 40
	}, {
		name: {
			en: "Wave Splash"
		},

		cost: ["Water", "Water", "Water"],

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895803,
				tcgplayer: 704772
			}
		},
	],
}

export default card
