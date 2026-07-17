import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
		de: "Es prustet Meerwasser aus den Nasenlöchern, die über seinen Augen liegen. Außerdem frisst es täglich eine Tonne Lusardin."
	},

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
			en: "Water Gun",
			de: "Aquaknarre"
		},

		cost: ["Water", "Water"],

		damage: 40
	}, {
		name: {
			en: "Wave Splash",
			de: "Wellenplatscher"
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
