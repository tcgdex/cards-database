import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泳圈鼬",
		ja: "ブイゼル"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "使脖子上的浮囊膨脹，從水面露出臉， 觀察著周圍的樣子。",
		ja: "首の 浮き袋を ふくらませ 水面から 顔を だして 辺りの 様子を うかがっている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "高速移動",
			ja: "こうそくいどう"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [418]
}

export default card