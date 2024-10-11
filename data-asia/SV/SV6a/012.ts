import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "キングドラex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "おうのごうれい"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを3枚まで選び、ベンチに出す。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ"
		},

		damage: "50＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card