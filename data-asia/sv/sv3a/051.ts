import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "オトシドリex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファストキャリー"
		},

		effect: {
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "シャドーウインド"
		},

		damage: 130,

		effect: {
			ja: "のぞむなら、このポケモンと、ついているすべてのカードを、手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card