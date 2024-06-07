import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "ライチュウV"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ファストチャージ"
		},

		effect: {
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からエネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ダイナミックスパーク"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card