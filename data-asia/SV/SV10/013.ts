import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蒂狗",
		'zh-cn': "卡蒂狗",
		ja: "ガーディ"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "能毫不畏懼地去對抗 比自己更強更大的對手。 性格非常勇敢可靠。",
		'zh-cn': "能毫不畏懼地去對抗 比自己更強更大的對手。 性格非常勇敢可靠。",
		ja: "自分より 強くて 大きな 相手にも 恐れずに 立ち向かう 勇敢で 頼もしい 性格。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火種",
			'zh-cn': "火種",
			ja: "ひだね"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "豎爪",
			'zh-cn': "豎爪",
			ja: "ツメをたてる"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [58]
}

export default card