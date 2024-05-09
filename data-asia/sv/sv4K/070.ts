import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ミガルーサ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	dexId: [976],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "無駄な 肉を 捨て去ると 心が 研ぎ澄まされ サイコパワーが 上がる。 贅肉は 淡白だが 美味しい。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みをきるおもい"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、このポケモンについているエネルギーを2枚まで選び、ベンチポケモン1匹につけ替える。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ"
		},

		damage: "60＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card