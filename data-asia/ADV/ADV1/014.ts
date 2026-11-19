import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "じたばた"
		},

		effect: {
			ja: "自分のダメージカウンター×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784498,
				tcgplayer: 613041,
				cardtrader: 137998,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784498,
				tcgplayer: 613041,
				cardtrader: 137998,
			},
		},
	]
}

export default card
