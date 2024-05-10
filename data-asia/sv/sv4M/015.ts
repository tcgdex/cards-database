import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒヤップ",
		'zh-tw': "冷水猴"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [515],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "頭の ふさに ためた 水は 栄養 たっぷり。 植物に かけると 大きく 育つのだ。",
		'zh-tw': "頭上的毛髮叢裡儲藏的水充滿營養。如果拿來灌溉，植物就會茁壯成長。"
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
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "みずのはどう",
			'zh-tw': "水之波動"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card