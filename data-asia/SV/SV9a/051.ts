import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパーのオラチフ",
		'zh-tw': "<派帕的>偶叫獒",
		'zh-cn': "<派帕的>偶叫獒"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是 皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。",
		'zh-cn': "為了不被對手看扁而總是 皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			'zh-cn': "踩"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "がちんこ",
			'zh-tw': "正面對決",
			'zh-cn': "正面對決"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card