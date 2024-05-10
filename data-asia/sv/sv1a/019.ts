import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "アチゲータ",
		'zh-tw': "炙燙鱷"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [910],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "炎エネルギーと 有り余る 生命力が 交じり 頭上に タマゴ型の 火玉が 現れた。",
		'zh-tw': "火之能量與過剩的生命力相互結合，使得牠頭上 出現了蛋狀的火球。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひをはく",
			'zh-tw': "吐火"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ハイパーボイス",
			'zh-tw': "巨聲"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card