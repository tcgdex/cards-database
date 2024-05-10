import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アマカジ",
		'zh-tw': "甜竹竹"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [761],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "果物を 煮詰めたような 甘い 汗を かくため 甘味の 少ない 昔は とても 重宝された。",
		'zh-tw': "汗水帶著像是經過熬煮的水果甜味，在過去甜食尚少 的時代相當受到人們珍視。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "クイックアタック",
			'zh-tw': "快速攻擊"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card