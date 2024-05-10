import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケンタロス",
		'zh-tw': "肯泰羅"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "獲物に 狙いを つけると 尻尾で 体を 叩きながら まっすぐ 突っ込んでくる。",
		'zh-tw': "鎖定了獵物之後，就會一邊用尾巴抽打身體， 一邊筆直地衝向目標。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "むれをあつめる",
			'zh-tw': "群集"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "いかり",
			'zh-tw': "憤怒"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card