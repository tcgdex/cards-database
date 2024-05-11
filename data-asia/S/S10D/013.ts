import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蚊香蛙皇"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "天黑後就會出現在池子邊。會用怒吼般的聲音大叫， 來強調那是自己的地盤喔。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "君主樂舞"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「蚊香蝌蚪」則增加60點傷害，有「蚊香君」則增加90點傷害，有「蚊香泳士」則增加120點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "水炮濺射"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card