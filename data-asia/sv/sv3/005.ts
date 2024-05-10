import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ツボツボ",
		'zh-tw': "壺壺"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [213],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ツボのような 甲羅の 中に ためこんだ 木の実は いつの間にか ドロドロの ジュースに 変わる。",
		'zh-tw': "儲存在壺形甲殼裡的樹果會在不知不覺間變成黏糊糊的果汁。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きのみのかおり",
			'zh-tw': "樹果香氣"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card