import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "エレザード",
		'zh-tw': "光電傘蜥",
		'zh-cn': "光電傘蜥"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [695],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "襟巻を 広げて 太陽光を 浴びると 大都会で 使われる 電気を １匹で 発電する。",
		'zh-tw': "如果展開頸傘沐浴陽光， 單憑１隻光電傘蜥就能 製造出大城市所需的電力。",
		'zh-cn': "如果展開頸傘沐浴陽光， 單憑１隻光電傘蜥就能 製造出大城市所需的電力。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パラボラチャージ",
			'zh-tw': "拋物面充電",
			'zh-cn': "拋物面充電"
		},

		effect: {
			ja: "自分の山札からエネルギーを4枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多4張能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多4張能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "エレキスラッグ",
			'zh-tw': "電氣猛擊",
			'zh-cn': "電氣猛擊"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card