import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン",
		'zh-tw': "小鍛匠"
	},

	illustrator: "yuu",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "手作りの ハンマーを 振りまわして 身を 守るが 金属を 食べる ポケモンには よく 奪われる。",
		'zh-tw': "雖然會揮舞著手工打造的錘子來保護自己，但卻常被 以金屬為食的寶可夢搶走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てつクズひろい",
			'zh-tw': "撿鐵屑"
		},

		effect: {
			ja: "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ようせいのかぜ",
			'zh-tw': "妖精之風"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card