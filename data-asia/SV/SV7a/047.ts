import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豐蜜龍",
		'zh-cn': "豐蜜龍",
		ja: "タルップル"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "當有愛吃豚跑來舔食 自己背上的甜甜蜜時， 會吐出黏糊糊的蜜來擊退。",
		'zh-cn': "當有愛吃豚跑來舔食 自己背上的甜甜蜜時， 會吐出黏糊糊的蜜來擊退。",
		ja: "背中の 甘い蜜を 舐め取りに やって来る グルトンに ベトベトの 蜜を 吐きかけ 退ける。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "甜蜜熔化",
			'zh-cn': "甜蜜熔化",
			ja: "スイートメルト"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "狂野衝撞",
			'zh-cn': "狂野衝撞",
			ja: "ワイルドタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'zh-cn': "這隻寶可夢也受到20點傷害。",
			ja: "このポケモンにも20ダメージ。"
		},

		damage: 130,
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [842]
}

export default card