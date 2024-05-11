import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摔角鷹人",
		ja: "ルチャブル"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "利用發揮輕盈體型優勢的戰法，在消耗了對手的體力之後 使用華麗的絕招分出勝負。",
		ja: "身軽さを 活かした 戦法で 相手の 体力を 奪ってから 華麗な 大技を 決める。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "展示姿勢",
			ja: "アピールポーズ"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，附於1隻備戰寶可夢身上。",
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "揮擊",
			ja: "ふりおろす"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加30點傷害。",
			ja: "相手のバトルポケモンが進化ポケモンなら、30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [701]
}

export default card