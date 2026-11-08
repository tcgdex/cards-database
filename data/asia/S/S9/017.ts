import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸",
		'ja-jp': "ブーバーン"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛， 達到攝氏２０００度。",
		'ja-jp': "大きく 息を 吸いこむと 腹の 中の 炎が 勢いを 増して 摂氏２０００度に 達する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳",
			'ja-jp': "メガトンパンチ"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特爆發",
			'ja-jp': "ボルトプロージョン"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。",
			'ja-jp': "自分のベンチに「エレキブル」がいるなら、120ダメージ追加。"
		},

		damage: "120＋",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605868,
				tcgplayer: 569645,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [467],
}

export default card