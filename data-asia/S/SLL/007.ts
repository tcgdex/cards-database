import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "岩狗狗",
		ja: "イワンコ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "非常容易親近，但是卻喜歡東咬西咬，所以如果要一直培育牠的話會相當費勁。",
		ja: "よく 懐くが 噛み癖が あるので ずっと 育てるには なかなか 骨が 折れるぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出",
			ja: "ダブルドロー"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。",
			ja: "自分の山札を2枚引く。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "後踢",
			ja: "うしろげり"
		},

		damage: 30,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [744]
}

export default card