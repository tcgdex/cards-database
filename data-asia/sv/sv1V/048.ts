import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ハカドッグ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [972],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "大切に 弔われた ポケモンが 生まれ変わった 姿。 頭の 突起を 触られるのは 嫌い。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "おはかまいり"
		},

		damage: "80＋",

		effect: {
			ja: "自分のトラッシュにあるポケモンの枚数×10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3
}

export default card