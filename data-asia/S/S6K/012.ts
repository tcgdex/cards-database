import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪狃拉"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "透過用爪子留下記號來與夥伴聯絡。據說記號的種類有５００種以上。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雙擊必殺"
		},

		effect: {
			'zh-tw': "在下個自己的回合，受到這個招式的寶可夢若受到「連擊」寶可夢招式的傷害，會【氣絕】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "詭計"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card