import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月石",
		ja: "ルナトーン"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "月亮的盈虧似乎會影響牠力量的增減。每到滿月之夜就會變得活躍。",
		ja: "月の 満ち欠けと パワーの 増減が 関係 しているらしく 満月の 夜 活発になる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "循環抽出",
			ja: "サイクルドロー"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
			ja: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "月亮強念",
			ja: "ムーンキネシス"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
			ja: "このポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [337]
}

export default card