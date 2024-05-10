import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "フラエッテ",
		'zh-tw': "花葉蒂"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [670],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "自分の エネルギーを 赤色の 波長に 乗せて 花へ 送り 潜在能力を 引き出すのだ。",
		'zh-tw': "會透過紅色的波長 把自己的能量傳遞給花， 以激發花的潛在能力。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちいさなおつかい",
			'zh-tw': "小使者"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card