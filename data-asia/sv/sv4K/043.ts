import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルー",
		'zh-tw': "古鼎鹿"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1003],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古の 儀式で 使われた 器に 注がれた 恐怖が 土石を まとい ポケモンとなった。",
		'zh-tw': "古老儀式用的容器中注入的恐懼把土石裹在自己身上， 變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "サンドブリング",
			'zh-tw': "沙之到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ごうまんインパクト",
			'zh-tw': "傲慢衝擊"
		},

		damage: 220,

		effect: {
			ja: "このポケモンにダメカンが4個以上のっているなら、このワザは失敗。",
			'zh-tw': "若這隻寶可夢身上放置有4個以上的傷害指示物，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card