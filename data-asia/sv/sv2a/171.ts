import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カメール"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [8],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "ふさふさの 耳と しっぽを たくみに 操って 水中での バランスを たもつ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "すもぐり"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を3枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "かいてんアタック"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card