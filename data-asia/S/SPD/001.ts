import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海星星",
		ja: "ヒトデマン"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "在夏天快結束時到海邊，就能看見成群的海星星 有規律地一閃一閃發光。",
		ja: "夏の終わりの 浜辺に 行くと 規則的な リズムで 光る ヒトデマンの 群れが 見られるよ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重旋轉",
			ja: "ダブルスピン"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [120]
}

export default card