import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトカゲ",
		'zh-tw': "小火龍"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。 火焰熄滅時，生命也會結束。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "まるやけ",
			'zh-tw': "全部燒光"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card