import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマ",
		'zh-tw': "紅蓮鎧騎",
		'zh-cn': "紅蓮鎧騎"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "エスパーと 炎の エネルギーで 強化された 鎧を まとう。 灼熱の 火の玉を 放つ。",
		'zh-tw': "身上包裹著受到超能力 和火焰能量強化的鎧甲。 會釋放熾熱的火球。",
		'zh-cn': "身上包裹著受到超能力 和火焰能量強化的鎧甲。 會釋放熾熱的火球。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かえん",
			'zh-tw': "烈焰",
			'zh-cn': "烈焰"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "グレンブラスター",
			'zh-tw': "紅蓮引爆",
			'zh-cn': "紅蓮引爆"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のベンチポケモン1匹に、180ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的【火】能量卡全部丟棄，對手的1隻備戰寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "將這隻寶可夢身上附加的【火】能量卡全部丟棄，對手的1隻備戰寶可夢受到180點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card