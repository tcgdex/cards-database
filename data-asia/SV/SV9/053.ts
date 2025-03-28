import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのスナヘビ",
		'zh-tw': "赫普的沙包蛇",
		'zh-cn': "赫普的沙包蛇"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [843],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "風船のように 伸び縮む 首の 袋は 脱皮を 重ねるたびに 伸縮性が 増していく。",
		'zh-tw': "頸部的囊袋就像氣球一樣 能伸縮自如，而隨著不斷 蛻皮，伸縮性會隨之增加。",
		'zh-cn': "頸部的囊袋就像氣球一樣 能伸縮自如，而隨著不斷 蛻皮，伸縮性會隨之增加。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なわばりづくり",
			'zh-tw': "築窩",
			'zh-cn': "築窩"
		},

		effect: {
			ja: "自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			'zh-cn': "咬"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card