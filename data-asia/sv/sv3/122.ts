import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "バンギラスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "やまとばし"
		},

		damage: 120,

		effect: {
			ja: "自分の山札を上から2枚トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "トールランページ"
		},

		damage: "150＋",

		effect: {
			ja: "自分のベンチポケモンにダメカンがのっているなら、100ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card