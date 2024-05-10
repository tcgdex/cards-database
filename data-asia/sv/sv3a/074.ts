import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ",
		'zh-tw': "摩托蜥"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。",
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バディドライブ",
			'zh-tw': "拍檔猛衝"
		},

		damage: "70+",

		effect: {
			ja: "この番、手札からサポートを出して使っていたなら、70ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card