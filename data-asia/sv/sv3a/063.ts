import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキワラシ"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [361],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "大きな 葉っぱの 下に 数匹の ユキワラシが 集まり 仲良く 暮らしているという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こおりのつぶて"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card