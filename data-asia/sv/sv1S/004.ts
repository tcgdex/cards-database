import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーゴート",
		'zh-tw': "坐騎山羊"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [673],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "ツノで 触れると 相手の 気持ちを 感じとれる。 ５０００年前から 人の 仕事を 手伝ってきた。",
		'zh-tw': "用角一碰就可以感受到對手的心情。從５０００年前起 就一直協助著人類工作至今。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つきあげる",
			'zh-tw': "上衝"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "ソーラービーム",
			'zh-tw': "日光束"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card