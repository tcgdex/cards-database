import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペリッパー"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	dexId: [279],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "くちばしに 小さな ポケモンを 入れて 飛ぶ 空の 配達屋。 海に 浮かんで 羽を 休める。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かぜのたより"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札またはトラッシュのどちらかを選ぶ。その中からサポートを1枚選び、相手に見せて、手札に加える。山札を見たなら、山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つばさでうつ"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card