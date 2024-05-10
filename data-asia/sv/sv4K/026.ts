import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ミガルーサ",
		'zh-tw': "輕身鱈"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [976],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "無駄な 肉を 捨て去ると 心が 研ぎ澄まされ サイコパワーが 上がる。 贅肉は 淡白だが 美味しい。",
		'zh-tw': "捨棄不必要的肉，能使其心靈受到磨練，精神力量得以提升。 贅肉滋味清淡，但卻相當可口。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みをきるおもい",
			'zh-tw': "捨己救人"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、このポケモンについているエネルギーを2枚まで選び、ベンチポケモン1匹につけ替える。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，選擇最多2張這隻寶可夢身上附加的【水】能量卡，改附於1隻備戰寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ",
			'zh-tw': "水炮"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card