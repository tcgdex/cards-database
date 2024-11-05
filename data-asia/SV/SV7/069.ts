import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪怪",
		'zh-cn': "齒輪怪",
		ja: "ギギギアル"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "會從尖刺的前端發出強力 電擊。紅色核心裡填充著 非常多的能量。",
		'zh-cn': "會從尖刺的前端發出強力 電擊。紅色核心裡填充著 非常多的能量。",
		ja: "棘の 先から 強い 電撃を 発射。 赤いコアに たくさんの エネルギーを 蓄えている。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "緊急迴轉",
			'zh-cn': "緊急迴轉",
			ja: "きんきゅうかいてん"
		},

		effect: {
			'zh-tw': "在自己的回合，若手牌有這張卡，且對手的場上有【2階進化】寶可夢，則可使用1次。將這張卡放置於備戰區。",
			'zh-cn': "在自己的回合，若手牌有這張卡，且對手的場上有【2階進化】寶可夢，則可使用1次。將這張卡放置於備戰區。",
			ja: "自分の番に、このカードが手札にあり、相手の場に2進化ポケモンがいるなら、1回使える。このカードをベンチに出す。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高級光束",
			'zh-cn': "高級光束",
			ja: "ハイパービーム"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [601]
}

export default card