import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダー",
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [849],
	hp: 140,
	types: ["Lightning"],

	description: {
		ja: "どんな 相手にも 動じず 気だるげに ケンカを売る スタイルに 憧れる 若者も 多い。",
		'zh-tw': "面對任何對手都能鎮定自若，一臉懶樣地挑釁對手的風格， 受到了不少年輕人的憧憬。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "にらみつける",
			'zh-tw': "瞪眼"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ミックスラウド",
			'zh-tw': "混和高聲"
		},

		damage: "50+",

		effect: {
			ja: "自分のベンチポケモンのタイプの数×30ダメージ追加。",
			'zh-tw': "增加自己的備戰寶可夢的屬性種類的數量×30點傷害。"
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