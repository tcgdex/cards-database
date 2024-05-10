import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ソルロック",
		'zh-tw': "太陽岩"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [338],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "太陽エネルギーが パワーの 源 なので 昼間は 強い。 回転すると 体が 光る。",
		'zh-tw': "太陽能量是力量的來源，所以在白天裡很強。旋轉時身體會發光。"
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
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Darkness",
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