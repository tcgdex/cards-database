import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "サンダー",
		'zh-tw': "閃電鳥"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [145],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "電気を 自在に 操る。 真っ黒な 雷雲の 中に 巣があると 言い伝えられている。",
		'zh-tw': "能夠自在地操縱雷電。相傳牠的巢穴就在 烏黑的雷雲之中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "でんじは",
			'zh-tw': "電磁波"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "10まんボルト",
			'zh-tw': "十萬伏特"
		},

		damage: 190,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card