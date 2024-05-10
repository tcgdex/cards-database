import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピィ",
		'zh-tw': "皮寶寶"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	dexId: [173],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "お星さまのような シルエット。 その姿から 流れ星に乗って やって来ると 信じられている。",
		'zh-tw': "有著如同星星一般的輪廓。因為這樣的外型，人們相信 牠是乘著流星而來的。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "にぎにぎドロー",
			'zh-tw': "握握抽出"
		},

		effect: {
			ja: "自分の手札が7枚になるように、山札を引く。",
			'zh-tw': "從牌庫抽卡直到自己的手牌滿7張為止。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
