import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コダック"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	dexId: [54],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも 頭痛に 悩まされている。 この 頭痛が 激しくなると 不思議な 力を 使いはじめる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かんがえすぎる"
		},

		effect: {
			ja: "次の相手の番、相手が投げるコインは、すべてウラとしてあつかう。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずでっぽう"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card