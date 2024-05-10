import { Card } from "../../../interfaces"
import Set from "../sv-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臺北的皮卡丘"
	},

	illustrator: "REOspikee",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "在森林裡和夥伴們一起生活。會把電力 儲存在兩頰的電囊裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "新開幕"
		},

		effect: {
			'zh-tw': "雙方玩家各將自己的牌庫上方1張卡翻到正面，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "樂享伏特"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card