import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆",
		ja: "チャーレム"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "能用在瑜伽的修行中鍛鍊出來的精神力量預測對手的行動。",
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "戰鬥舞步",
			ja: "バトルステップ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【鬥】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
			ja: "自分の山札からエネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [308]
}

export default card