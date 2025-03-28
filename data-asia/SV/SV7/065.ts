import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詐唬魔",
		'zh-cn': "詐唬魔",
		ja: "ギモー"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "吸收負面情緒來轉化成 自身能量的寶可夢。 深受有負面思考習慣的人歡迎。",
		'zh-cn': "吸收負面情緒來轉化成 自身能量的寶可夢。 深受有負面思考習慣的人歡迎。",
		ja: "負の 感情を 吸い取って エネルギーにしている ポケモン。 マイナス思考の 人に 人気。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "重摑",
			'zh-cn': "重摑",
			ja: "ひっぱたく"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暗之牙",
			'zh-cn': "暗之牙",
			ja: "やみのキバ"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [860]
}

export default card