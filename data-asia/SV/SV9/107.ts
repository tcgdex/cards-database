import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガン"
	},

	illustrator: "GIDORA",
	rarity: "None",
	category: "Pokemon",
	dexId: [745],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "鋭い ツメや キバで 獲物を 襲う。 信頼する トレーナーの 指示には 忠実に 従う。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "とげをまとう"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「スパイクエネルギー」を2枚まで選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "クラッチファング"
		},

		damage: "40＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card