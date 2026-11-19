import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ニョロボン",
		'zh-tw': "蚊香泳士"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [62],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		ja: "ニョロゾ"
	},

	description: {
		ja: "全身が 筋肉の 塊。 寒い 海でも たくましい 腕で 流氷を 砕き 突き進む。",
		'zh-tw': "全身都是肌肉。即使是在寒冷的大海也能用結實的手臂 擊碎浮冰，奮勇前進。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "ぐるぐるパンチ",
			'zh-tw': "轉轉拳"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			ja: "スプラッシュループ",
			'zh-tw': "飛濺閉環"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、手札にもどす。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。"
		},

		damage: 160,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650999,
				tcgplayer: 569786,
				cardtrader: 234097,
			},
		},
	]
}

export default card