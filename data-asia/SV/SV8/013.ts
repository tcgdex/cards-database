import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "メラルバ"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [636],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "大昔は 太陽の遣い と 崇められたが しばしば 山火事を 起こすこともあり 煙たがられた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぶつかる"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ひをはく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card