import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "雙腳變成了翅膀。能夠無聲無息地高速飛行， 用獠牙咬住獵物的後頸。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "毒牙"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 50,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "關鍵啃咬"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到30點傷害。若對手的寶可夢因這個招式的傷害而【氣絕】，則多獲得2張獎賞卡。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card