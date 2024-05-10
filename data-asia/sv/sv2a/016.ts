import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポッポ",
		'zh-tw': "波波"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [16],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。",
		'zh-tw': "雖然性情溫和不愛戰鬥， 但要是隨意對牠出手的話， 就會受到牠強烈的反擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card