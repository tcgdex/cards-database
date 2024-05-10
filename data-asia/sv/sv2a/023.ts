import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボ",
		'zh-tw': "阿柏蛇"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "とりポケモンの タマゴが 好物。 噛まずに 丸呑みするので 喉が 詰まって 気を 失うことも。",
		'zh-tw': "最愛吃鳥寶可夢的蛋。 因為總是不咀嚼就整個吞下， 有時會被噎住而昏倒。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "アシッドボム",
			'zh-tw': "酸液炸彈"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
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