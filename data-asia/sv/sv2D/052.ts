import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラス",
		'zh-tw': "班基拉斯"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 180,
	types: ["Darkness"],

	description: {
		ja: "あたりの 地形を 変えるぐらい 朝飯前の 力持ち。 まわりを 気にしない ふてぶてしさ。",
		'zh-tw': "即便是改變周圍的地形也是小事一樁的大力士。 個性狂妄，不顧周遭的感受。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "けちらす",
			'zh-tw': "踢散"
		},

		damage: "30+",

		effect: {
			ja: "相手のベンチポケモンの数×30ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ドレッドマウンテン",
			'zh-tw': "忌憚山岳"
		},

		damage: 230,

		effect: {
			ja: "自分の山札を上から4枚トラッシュする。",
			'zh-tw': "將自己的牌庫上方4張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card