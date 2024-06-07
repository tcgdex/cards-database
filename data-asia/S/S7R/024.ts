import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幾何雪花"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "用冰的結晶做成的鎖鏈來綑綁獵物，把對手冰凍到零下１００度。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "元素連鎖"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方6張卡，選擇其中任意數量的基本能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "雪花冰"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card