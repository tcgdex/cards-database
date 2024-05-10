import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ウパー",
		'zh-tw': "帕底亞 烏波"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [194],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "縄張り争いに 敗れて 陸で 暮らすうちに 毒の 粘膜で 体を 保護するように 変わった。",
		'zh-tw': "因搶輸地盤而到陸地上生活，久而久之變成了是 用帶毒的黏膜來保護身體。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "やんちゃげり",
			'zh-tw': "調皮踢"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card