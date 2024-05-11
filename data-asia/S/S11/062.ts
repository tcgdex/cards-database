import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摔角鷹人"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後 使用華麗的絕招分出勝負。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸引"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雜技"
		},

		effect: {
			'zh-tw': "擲2次硬幣，增加正面出現的次數×20點傷害。"
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card