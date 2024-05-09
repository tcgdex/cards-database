import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ポリゴンZ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [474],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "追加 プログラムで 進化したと 言われるが ほんとうに 進化なのか 学会でも 意見が 分かれる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バグターボ"
		},

		effect: {
			ja: "自分の番に1回使える。コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを4枚まで選び、このポケモンにつける。ウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "エナジーアタック"
		},

		damage: "40×",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card