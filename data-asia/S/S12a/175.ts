import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸",
		ja: "ブーバーン"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛，達到攝氏２０００度。",
		ja: "大きく 息を 吸いこむと 腹の 中の 炎が 勢いを 増して 摂氏２０００度に 達する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳",
			ja: "メガトンパンチ"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特爆發",
			ja: "ボルトプロージョン"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。",
			ja: "自分のベンチに「エレキブル」がいるなら、120ダメージ追加。"
		},

		damage: "120＋",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [467]
}

export default card