import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒"
	},

	illustrator: "DOM",
	category: "Pokemon",
	dexId: [942],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "おそいかかる",
			'zh-tw': "伏擊"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card