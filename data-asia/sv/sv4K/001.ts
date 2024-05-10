import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤナップ",
		'zh-tw': "花椰猴"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [511],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "木の実を 探すのが 上手で あちこちで 集めて 仲間に 分け与える 優しさを 持つ。",
		'zh-tw': "擅長尋找樹果，有著四處收集樹果 與夥伴分享的體貼之心。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "やどりぎのタネ",
			'zh-tw': "寄生種子"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「10」回復する。",
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
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