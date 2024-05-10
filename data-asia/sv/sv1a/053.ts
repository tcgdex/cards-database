import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ウパー",
		'zh-tw': "帕底亞 烏波"
	},

	illustrator: "Kouki Saitou",
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
			ja: "すみかをさがす",
			'zh-tw': "尋找巢穴"
		},

		effect: {
			ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card