import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "フローゼル",
		'zh-tw': "浮潛鼬",
		'zh-cn': "浮潛鼬"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [419],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "浮き袋を ふくらませると 人を 背中に 乗せることが できる。 浮き袋を しぼませて 潜る。",
		'zh-tw': "膨脹起浮囊後就能 讓人坐在自己背上。 排出浮囊的氣來潛水。",
		'zh-cn': "膨脹起浮囊後就能 讓人坐在自己背上。 排出浮囊的氣來潛水。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うずしお",
			'zh-tw': "潮旋",
			'zh-cn': "潮旋"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "アクアスラッシュ",
			'zh-tw': "水流斬",
			'zh-cn': "水流斬"
		},

		damage: 140,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card