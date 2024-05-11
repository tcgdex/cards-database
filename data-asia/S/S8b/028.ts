import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 踏冰人偶"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "幽默的動作使牠獲得了眾人的喜愛。能從腹部的圖案釋放出精神力量。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "球戲法"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的名稱中有「球」的物品卡丟棄，增加其張數×40點傷害。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card